import React, { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
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
import { CalendarIcon, Clock } from "lucide-react";

interface ScheduleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ open, onOpenChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Horários disponíveis
  const allAvailableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  // Verifica se é dia útil (segunda a sexta)
  const isWeekday = (date: Date): boolean => {
    const day = date.getDay();
    return day >= 1 && day <= 5; // 1 = segunda, 5 = sexta
  };

  // Verifica se a data selecionada é hoje
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Obtém horários disponíveis baseado na data selecionada
  const getAvailableTimes = (date: Date | undefined): string[] => {
    if (!date) return [];

    // Se for hoje, filtra horários que ainda não passaram
    if (isToday(date)) {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute; // minutos desde meia-noite

      return allAvailableTimes.filter((time) => {
        const [hour, minute] = time.split(":").map(Number);
        const timeInMinutes = hour * 60 + minute;
        return timeInMinutes > currentTime;
      });
    }

    // Se não for hoje, mostra todos os horários
    return allAvailableTimes;
  };

  const availableTimes = getAvailableTimes(selectedDate);

  // Handler para quando a data é selecionada
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    // Limpar horário selecionado se não for mais válido
    if (date && selectedTime) {
      const times = getAvailableTimes(date);
      if (!times.includes(selectedTime)) {
        setSelectedTime("");
      }
    } else {
      setSelectedTime("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !name || !email || !phone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      alert(
        `Agendamento confirmado!\n\n` +
        `Nome: ${name}\n` +
        `Email: ${email}\n` +
        `Telefone: ${phone}\n` +
        `Data: ${format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}\n` +
        `Horário: ${selectedTime}`
      );
      
      // Resetar formulário
      setSelectedDate(undefined);
      setSelectedTime("");
      setName("");
      setEmail("");
      setPhone("");
      setIsSubmitting(false);
      onOpenChange(false);
    }, 1000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold text-riskon-900">
            Agende uma Demonstração
          </DialogTitle>
          
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="px-6 pb-4 overflow-y-auto flex-1">
          {/* Informações de Contato */}
          <div className="space-y-4">
            {/* Seleção de Data e Horário */}
          <div className="space-y-6">
           

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Calendário */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-teal-500" />
                  Selecione a Data *
                </Label>
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-shadow">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      // Desabilita datas passadas e fins de semana
                      return date < today || !isWeekday(date);
                    }}
                    locale={ptBR}
                    weekStartsOn={1}
                    className="rounded-md"
                  />
                </div>
                {selectedDate && (
                  <div className="flex items-center gap-2 p-3 bg-teal-50 border border-teal-200 rounded-lg">
                    <CalendarIcon className="h-4 w-4 text-teal-600" />
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-teal-700">Data selecionada:</span>{" "}
                      <span className="font-medium text-riskon-900">
                        {format(selectedDate, "dd 'de' MMMM 'de' yyyy", {
                          locale: ptBR,
                        })}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Seletor de Horário */}
              <div className="space-y-3">
                <Label htmlFor="time" className="text-base font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal-500" />
                  Selecione o Horário *
                </Label>
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gradient-to-br from-white to-gray-50">
                  {availableTimes.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`
                            px-4 py-3 rounded-lg border-2 transition-all duration-200
                            text-sm font-medium
                            ${
                              selectedTime === time
                                ? "bg-teal-500 text-white border-teal-500 shadow-md scale-105"
                                : "bg-white text-gray-700 border-gray-300 hover:border-teal-300 hover:bg-teal-50"
                            }
                          `}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <Clock className={`h-4 w-4 ${selectedTime === time ? "text-white" : "text-teal-500"}`} />
                            <span>{time}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-sm text-gray-500">
                        {!selectedDate
                          ? "Selecione uma data primeiro para ver os horários disponíveis."
                          : isToday(selectedDate)
                          ? "Não há mais horários disponíveis hoje. Por favor, selecione outra data."
                          : "Nenhum horário disponível para esta data."}
                      </p>
                    </div>
                  )}
                </div>
                {selectedTime && (
                  <div className="flex items-center gap-2 p-3 bg-teal-50 border border-teal-200 rounded-lg">
                    <Clock className="h-4 w-4 text-teal-600" />
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-teal-700">Horário selecionado:</span>{" "}
                      <span className="font-medium text-riskon-900">{selectedTime}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          </div>

          <DialogFooter className="px-6 py-4 border-t bg-white sticky bottom-0 mt-auto w-full flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="sm:w-auto"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white flex-1 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;

