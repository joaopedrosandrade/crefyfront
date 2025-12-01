import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, FileText, X, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    area: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const areas = [
    "Programador Backend",
    "Programador Frontend",
    "Programador Full Stack",
    "DevOps",
    "Engenheiro de Dados",
    "Cientista de Dados",
    "Analista de Dados",
    "Product Manager",
    "Designer UX/UI",
    "QA/Tester",
    "Scrum Master",
    "Arquiteto de Software",
    "Especialista em IA/ML",
    "Vendas",
    "Marketing",
    "Atendimento ao Cliente",
    "Suporte Técnico",
    "Compliance",
    "Outra",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo de arquivo (PDF, DOC, DOCX)
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Tipo de arquivo inválido",
          description: "Por favor, envie um arquivo PDF, DOC ou DOCX.",
          variant: "destructive",
        });
        return;
      }

      if (file.size > maxSize) {
        toast({
          title: "Arquivo muito grande",
          description: "O arquivo deve ter no máximo 5MB.",
          variant: "destructive",
        });
        return;
      }

      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    if (!formData.name || !formData.email || !formData.phone || !formData.area || !resumeFile) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos e anexe seu currículo.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você faria a chamada para a API
      // Por enquanto, simulamos um delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulação de sucesso
      setShowSuccess(true);
      
      toast({
        title: "Currículo enviado!",
        description: "Recebemos seu currículo. Entraremos em contato em breve.",
      });

      // Reset form após 2 segundos
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          linkedin: "",
          area: "",
        });
        setResumeFile(null);
        setShowSuccess(false);
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar seu currículo. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        linkedin: "",
        area: "",
      });
      setResumeFile(null);
      setShowSuccess(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle2 className="h-16 w-16 text-teal-500 mb-4" />
            <DialogTitle className="text-2xl font-bold text-center mb-2">
              Currículo Enviado!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Recebemos seu currículo com sucesso. Nossa equipe entrará em contato em breve.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Enviar Currículo</DialogTitle>
              <DialogDescription>
                Preencha os dados abaixo e anexe seu currículo. Entraremos em contato em breve!
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="h-11"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/seu-perfil"
                  value={formData.linkedin}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Área Pretendida *</Label>
                <Select
                  value={formData.area}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, area: value }))
                  }
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Selecione a área" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Currículo (PDF, DOC ou DOCX) *</Label>
                <div className="relative">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                    className="h-11 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 file:cursor-pointer cursor-pointer"
                  />
                </div>
                {resumeFile && (
                  <div className="flex items-center gap-2 mt-2 p-3 bg-gray-50 rounded-md">
                    <FileText className="h-5 w-5 text-teal-500" />
                    <span className="flex-1 text-sm text-gray-700 truncate">
                      {resumeFile.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                    <button
                      type="button"
                      onClick={() => setResumeFile(null)}
                      disabled={isSubmitting}
                      className="ml-2 text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Tamanho máximo: 5MB. Formatos aceitos: PDF, DOC, DOCX
                </p>
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Upload className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Enviar Currículo
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;

