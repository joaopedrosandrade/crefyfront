import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Code, 
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  UserCircle,
  Briefcase,
  Loader2
} from "lucide-react";

const ComeceGratuitamente = () => {
  const navigate = useNavigate();
  const [personType, setPersonType] = useState<"pf" | "pj" | "">("");
  const [formData, setFormData] = useState({
    companyName: "",
    cnpj: "",
    cpf: "",
    fullName: "",
    responsibleName: "",
    email: "",
    phone: "",
    usageType: [] as ("api" | "painel")[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCompany, setIsLoadingCompany] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePersonTypeSelect = (type: "pf" | "pj") => {
    setPersonType(type);
    setIsLoadingCompany(false);
    // Limpar campos ao trocar o tipo
    setFormData({
      companyName: "",
      cnpj: "",
      cpf: "",
      fullName: "",
      responsibleName: "",
      email: "",
      phone: "",
      usageType: [],
    });
    setErrors({});
    if (errors.personType) {
      setErrors((prev) => ({ ...prev, personType: "" }));
    }
  };

  const handleUsageTypeSelect = (type: "api" | "painel") => {
    setFormData((prev) => {
      const currentTypes = prev.usageType;
      // Se já está selecionado, remove; caso contrário, adiciona
      const newTypes = currentTypes.includes(type)
        ? currentTypes.filter((t) => t !== type)
        : [...currentTypes, type];
      
      return { ...prev, usageType: newTypes };
    });
    if (errors.usageType) {
      setErrors((prev) => ({ ...prev, usageType: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!personType) {
      newErrors.personType = "Selecione o tipo de cadastro";
    }

    if (personType === "pj") {
      if (!formData.companyName.trim()) {
        newErrors.companyName = "Nome da empresa é obrigatório";
      }

      if (!formData.cnpj.trim()) {
        newErrors.cnpj = "CNPJ é obrigatório";
      } else if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(formData.cnpj)) {
        newErrors.cnpj = "CNPJ inválido. Use o formato: XX.XXX.XXX/XXXX-XX";
      }

      if (!formData.responsibleName.trim()) {
        newErrors.responsibleName = "Nome do responsável é obrigatório";
      }
    } else if (personType === "pf") {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Nome completo é obrigatório";
      }

      if (!formData.cpf.trim()) {
        newErrors.cpf = "CPF é obrigatório";
      } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formData.cpf)) {
        newErrors.cpf = "CPF inválido. Use o formato: XXX.XXX.XXX-XX";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    }

    if (formData.usageType.length === 0) {
      newErrors.usageType = "Selecione pelo menos uma opção de uso";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 14) {
      return numbers
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
    return value;
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1-$2");
    }
    return value;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    }
    return value;
  };

  const fetchCompanyData = async (cnpj: string) => {
    // Remove formatação para buscar
    const cleanCNPJ = cnpj.replace(/\D/g, "");
    
    // Verifica se o CNPJ está completo (14 dígitos)
    if (cleanCNPJ.length === 14) {
      setIsLoadingCompany(true);
      
      try {
        const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cleanCNPJ}`);
        
        if (response.ok) {
          const data = await response.json();
          
          // Preencher o nome da empresa
          if (data.razao_social) {
            setFormData((prev) => ({ 
              ...prev, 
              companyName: data.razao_social 
            }));
          }
        } else {
          // Se a API retornar erro, não preencher nada
          console.error("Erro ao buscar dados do CNPJ:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do CNPJ:", error);
        // Em caso de erro, não preencher nada
      } finally {
        setIsLoadingCompany(false);
      }
    }
  };

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNPJ(e.target.value);
    setFormData((prev) => ({ ...prev, cnpj: formatted }));
    if (errors.cnpj) {
      setErrors((prev) => ({ ...prev, cnpj: "" }));
    }
    
    // Buscar dados da empresa quando o CNPJ estiver completo
    fetchCompanyData(formatted);
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setFormData((prev) => ({ ...prev, cpf: formatted }));
    if (errors.cpf) {
      setErrors((prev) => ({ ...prev, cpf: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Scroll para o topo para mostrar a mensagem de sucesso
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <ScrollToTop />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Mensagem de Sucesso */}
          {isSuccess && (
            <div className="mb-8 bg-white rounded-2xl shadow-xl border border-green-200 p-8 md:p-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-riskon-900 mb-4">
                  Cadastro realizado com sucesso! 🎉
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Parabéns! Seu cadastro foi concluído com sucesso. Em breve você receberá um email com todas as instruções de acesso à plataforma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => {
                      setIsSuccess(false);
                      setPersonType("");
                      setFormData({
                        companyName: "",
                        cnpj: "",
                        cpf: "",
                        fullName: "",
                        responsibleName: "",
                        email: "",
                        phone: "",
                        usageType: [],
                      });
                    }}
                    variant="outline"
                    className="border-teal-500 text-teal-500 hover:bg-teal-50"
                  >
                    Fazer outro cadastro
                  </Button>
                  <Button
                    onClick={() => navigate("/")}
                    className="bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    Voltar para a página inicial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Header */}
          {!isSuccess && (
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6">
                <ShieldCheck size={16} className="mr-2" />
                Comece Grátis! Sem Cartão de Crédito ou pegadinha. 
              </div>
              <div className="flex justify-center mb-4">
                <img 
                  src="/img/logo.png" 
                  alt="Crefy" 
                  className="h-16 md:h-20 w-auto"
                />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Escolha o tipo de cadastro e preencha seus dados para começar a usar nossa plataforma de análise de crédito.
              </p>
            </div>
          )}

          {/* Formulário */}
          {!isSuccess && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Tipo de Pessoa */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-riskon-900">
                  Tipo de Cadastro *
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handlePersonTypeSelect("pf")}
                    className={`
                      p-6 rounded-xl border-2 transition-all duration-200 text-left
                      ${
                        personType === "pf"
                          ? "border-teal-500 bg-teal-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50/50"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            p-2 rounded-lg
                            ${
                              personType === "pf"
                                ? "bg-teal-500 text-white"
                                : "bg-gray-100 text-gray-600"
                            }
                          `}
                        >
                          <UserCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-riskon-900">
                            Pessoa Física (CPF)
                          </h3>
                          <p className="text-sm text-gray-600">Cadastro individual</p>
                        </div>
                      </div>
                      {personType === "pf" && (
                        <CheckCircle2 className="h-6 w-6 text-teal-500" />
                      )}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePersonTypeSelect("pj")}
                    className={`
                      p-6 rounded-xl border-2 transition-all duration-200 text-left
                      ${
                        personType === "pj"
                          ? "border-teal-500 bg-teal-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50/50"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            p-2 rounded-lg
                            ${
                              personType === "pj"
                                ? "bg-teal-500 text-white"
                                : "bg-gray-100 text-gray-600"
                            }
                          `}
                        >
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-riskon-900">
                            Pessoa Jurídica (CNPJ)
                          </h3>
                          <p className="text-sm text-gray-600">Cadastro empresarial</p>
                        </div>
                      </div>
                      {personType === "pj" && (
                        <CheckCircle2 className="h-6 w-6 text-teal-500" />
                      )}
                    </div>
                  </button>
                </div>
                {errors.personType && (
                  <p className="text-sm text-red-500">{errors.personType}</p>
                )}
              </div>

              {/* Informações da Empresa (PJ) */}
              {personType === "pj" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                    <Building2 className="h-5 w-5 text-teal-500" />
                    <h2 className="text-xl font-semibold text-riskon-900">
                      Informações da Empresa
                    </h2>
                  </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cnpj" className="text-base font-medium">
                      CNPJ *
                    </Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="cnpj"
                        name="cnpj"
                        type="text"
                        placeholder="00.000.000/0000-00"
                        value={formData.cnpj}
                        onChange={handleCNPJChange}
                        maxLength={18}
                        className={`pl-10 pr-10 h-12 ${errors.cnpj ? "border-red-500" : ""}`}
                        required
                      />
                      {isLoadingCompany && (
                        <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-500 animate-spin" />
                      )}
                    </div>
                    {errors.cnpj && (
                      <p className="text-sm text-red-500">{errors.cnpj}</p>
                    )}
                    {isLoadingCompany && (
                      <p className="text-sm text-teal-600">Buscando dados da empresa...</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-base font-medium">
                      Nome da Empresa *
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Nome da sua empresa"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={`pl-10 h-12 ${errors.companyName ? "border-red-500" : ""} ${isLoadingCompany ? "opacity-50" : ""}`}
                        required
                        disabled={isLoadingCompany}
                      />
                    </div>
                    {errors.companyName && (
                      <p className="text-sm text-red-500">{errors.companyName}</p>
                    )}
                    {formData.companyName && !isLoadingCompany && (
                      <p className="text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        Dados preenchidos automaticamente
                      </p>
                    )}
                  </div>
                </div>
              </div>
              )}

              {/* Informações Pessoais (PF) */}
              {personType === "pf" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                    <User className="h-5 w-5 text-teal-500" />
                    <h2 className="text-xl font-semibold text-riskon-900">
                      Informações Pessoais
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-base font-medium">
                        Nome Completo *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="Seu nome completo"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`pl-10 h-12 ${errors.fullName ? "border-red-500" : ""}`}
                          required
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-sm text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cpf" className="text-base font-medium">
                        CPF *
                      </Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="cpf"
                          name="cpf"
                          type="text"
                          placeholder="000.000.000-00"
                          value={formData.cpf}
                          onChange={handleCPFChange}
                          maxLength={14}
                          className={`pl-10 h-12 ${errors.cpf ? "border-red-500" : ""}`}
                          required
                        />
                      </div>
                      {errors.cpf && (
                        <p className="text-sm text-red-500">{errors.cpf}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Informações do Responsável (PJ) */}
              {personType === "pj" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                    <User className="h-5 w-5 text-teal-500" />
                    <h2 className="text-xl font-semibold text-riskon-900">
                      Informações do Responsável
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="responsibleName" className="text-base font-medium">
                        Nome Completo *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="responsibleName"
                          name="responsibleName"
                          type="text"
                          placeholder="Nome do responsável"
                          value={formData.responsibleName}
                          onChange={handleChange}
                          className={`pl-10 h-12 ${errors.responsibleName ? "border-red-500" : ""}`}
                          required
                        />
                      </div>
                      {errors.responsibleName && (
                        <p className="text-sm text-red-500">{errors.responsibleName}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Informações de Contato */}
              {personType && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                  <Mail className="h-5 w-5 text-teal-500" />
                  <h2 className="text-xl font-semibold text-riskon-900">
                    Informações de Contato
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`pl-10 h-12 ${errors.email ? "border-red-500" : ""}`}
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone" className="text-base font-medium">
                      Telefone *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`pl-10 h-12 ${errors.phone ? "border-red-500" : ""}`}
                        required
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>
              )}

              {/* Tipo de Uso */}
              {personType && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                  <Code className="h-5 w-5 text-teal-500" />
                  <h2 className="text-xl font-semibold text-riskon-900">
                    Como deseja utilizar?
                  </h2>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">Você pode selecionar ambas as opções!</span> Se desejar, é possível usar tanto a API quanto o Painel Web para consultas de CPF.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Opção API */}
                  <button
                    type="button"
                    onClick={() => handleUsageTypeSelect("api")}
                    className={`
                      p-6 rounded-xl border-2 transition-all duration-200 text-left
                      ${
                        formData.usageType.includes("api")
                          ? "border-teal-500 bg-teal-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50/50"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            p-2 rounded-lg
                            ${
                              formData.usageType.includes("api")
                                ? "bg-teal-500 text-white"
                                : "bg-gray-100 text-gray-600"
                            }
                          `}
                        >
                          <Code className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-riskon-900">
                          API
                        </h3>
                      </div>
                      {formData.usageType.includes("api") && (
                        <CheckCircle2 className="h-6 w-6 text-teal-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      Integre nossa API diretamente no seu sistema para consultas automatizadas de CPF.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-500" />
                        Integração via REST API
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-500" />
                        Documentação completa
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-500" />
                        Respostas em tempo real
                      </li>
                    </ul>
                  </button>

                  {/* Opção Painel */}
                  <button
                    type="button"
                    onClick={() => handleUsageTypeSelect("painel")}
                    className={`
                      p-6 rounded-xl border-2 transition-all duration-200 text-left
                      ${
                        formData.usageType.includes("painel")
                          ? "border-teal-500 bg-teal-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50/50"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            p-2 rounded-lg
                            ${
                              formData.usageType.includes("painel")
                                ? "bg-teal-500 text-white"
                                : "bg-gray-100 text-gray-600"
                            }
                          `}
                        >
                          <LayoutDashboard className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-riskon-900">
                          Painel Web
                        </h3>
                      </div>
                      {formData.usageType.includes("painel") && (
                        <CheckCircle2 className="h-6 w-6 text-teal-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      Acesse nosso painel web para realizar consultas de CPF de forma simples e intuitiva.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-500" />
                        Interface intuitiva
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-500" />
                        Histórico de consultas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-500" />
                        Relatórios detalhados
                      </li>
                    </ul>
                  </button>
                </div>

                {errors.usageType && (
                  <p className="text-sm text-red-500 mt-2">{errors.usageType}</p>
                )}
              </div>
              )}

              {/* Botão de Submit */}
              {personType && (
              <div className="pt-6 border-t border-gray-200">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white h-14 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    "Processando..."
                  ) : (
                    <>
                      Criar Conta Gratuita
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Ao criar sua conta, você concorda com nossos{" "}
                  <a href="/termos-de-servico" className="text-teal-500 hover:underline">
                    Termos de Serviço
                  </a>{" "}
                  e{" "}
                  <a href="/privacidade" className="text-teal-500 hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </div>
              )}
            </form>
          </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComeceGratuitamente;

