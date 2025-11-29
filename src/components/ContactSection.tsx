
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation would go here

    // Success toast
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo seu contato. Responderemos em breve.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
            <MessageSquare size={16} className="mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-riskon-900 mb-4">
            Vamos Conversar Sobre Seu Negócio
          </h2>
          <p className="text-lg text-gray-600">
            Estamos prontos para discutir como a Crefy pode transformar seus processos de decisão de crédito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-4">
                  <MapPin size={24} className="text-teal-500" />
                </div>
                <div>
                  <h3 className="font-bold text-riskon-900 mb-1">Nosso Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1000, São Paulo - SP</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Mail size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-riskon-900 mb-1">Email</h3>
                  <p className="text-gray-600">contato@crefy.com.br</p>
                  <p className="text-gray-600">suporte@crefy.com.br</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-purple-50 p-3 rounded-lg mr-4">
                  <Phone size={24} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold text-riskon-900 mb-1">Telefone</h3>
                  <p className="text-gray-600">+55 11 3456-7890</p>
                  <p className="text-gray-600">+55 11 9876-5432</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-riskon-900 mb-6">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Seu nome" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Nome da sua empresa" 
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Como podemos te ajudar?" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
