import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_LINK, CONTACT } from "@/lib/constants";

const segments = [
  "Farmácia de Manipulação",
  "Indústria Farmacêutica",
  "Indústria Cosmética",
  "Indústria Química",
  "Laboratório",
  "Outro",
];

const formSchema = z.object({
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  segmento: z.string().min(1, "Selecione um segmento"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .regex(/^[\d\s()+-]+$/, "Formato inválido"),
  mensagem: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      empresa: "",
      segmento: "",
      whatsapp: "",
      mensagem: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: FormData) => {
    // Simulate brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    const message = `*Solicitação de Orçamento*%0A%0A*Empresa:* ${data.empresa}%0A*Segmento:* ${data.segmento}%0A*WhatsApp:* ${data.whatsapp}${data.mensagem ? `%0A*Mensagem:* ${data.mensagem}` : ""}`;

    window.open(`https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${message}`, "_blank");

    toast({
      title: "Solicitação enviada!",
      description: "Você será redirecionado para o WhatsApp.",
    });

    form.reset();
  };

  return (
    <section id="contato" className="p-10 bg-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              Solicite Seu Orçamento de Qualificação Térmica
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Resposta em até 24 horas úteis
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6 md:p-10 shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da empresa *</FormLabel>
                        <FormControl>
                          <Input placeholder="Sua empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="segmento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Segmento *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o segmento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {segments.map((seg) => (
                              <SelectItem key={seg} value={seg}>
                                {seg}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(11) 99999-9999"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva sua necessidade..."
                          className="min-h-20 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="w-5 h-5 mr-2" />
                      Enviar Solicitação
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {/* Alternative contacts */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">
                Ou entre em contato diretamente:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/10 text-[#25D366] rounded-lg font-medium hover:bg-[#25D366]/20 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  {CONTACT.WHATSAPP_DISPLAY}
                </a>
                <a
                  href={`tel:${CONTACT.PHONE_LINK}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary/10 text-secondary rounded-lg font-medium hover:bg-secondary/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {CONTACT.PHONE}
                </a>
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {CONTACT.EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
