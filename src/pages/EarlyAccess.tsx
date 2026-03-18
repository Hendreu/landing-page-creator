import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Eye,
  Settings,
  Rocket,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn } from "@/lib/animations";

const MotionSection = ({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className={className}
    style={style}
  >
    {children}
  </motion.section>
);

const EarlyAccess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    role: "",
    awsSpend: "",
    painPoint: "",
    painPointOther: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("formulario-ea")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground mb-8"
          >
            <Zap className="w-4 h-4" />
            Early Access — 20 vagas
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            Reduza o seu custo de AWS{" "}
            <span className="text-primary">em dias!</span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A nova ferramenta de FinOps da Samax.io encontra desperdícios, prioriza os quick wins e coloca governança na sua fatura.
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            className="mt-10 bg-card rounded-2xl border border-border p-6 max-w-lg mx-auto text-left"
          >
            <p className="font-display font-bold text-foreground mb-3">Oportunidade única:</p>
            <div className="space-y-3">
              {[
                "20 vagas para startups com gasto anual de cloud de até R$ 500 mil",
                "Exclusivo para usuários AWS",
                "2 meses de teste gratuito para os 20 primeiros usuários",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={0.4} variants={fadeUp} className="mt-10">
            <Button size="lg" onClick={scrollToForm} className="rounded-full px-8 py-6 text-base font-semibold gap-2">
              Quero uma das 20 vagas
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">Leva menos de 2 minutos. Sem colocar cartão.</p>
          </motion.div>
        </div>
      </section>

      {/* Ponte */}
      <MotionSection className="py-20 px-6 bg-secondary">
        <motion.div variants={fadeUp} className="container mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl text-secondary-foreground/80 leading-relaxed">
            Se a sua startup já cresceu o suficiente para{" "}
            <strong className="text-secondary-foreground">"sentir" a fatura de AWS no caixa</strong>,
            você não precisa de mais dashboards.
          </p>
          <p className="mt-6 text-xl md:text-2xl text-secondary-foreground font-semibold">
            Você precisa de <span className="text-accent">clareza + ação</span>: onde está o desperdício, o que cortar primeiro e como evitar que volte.
          </p>
        </motion.div>
      </MotionSection>

      {/* Para quem é */}
      <MotionSection className="py-24 px-6" style={{ backgroundColor: 'hsl(var(--highlight-bg))' }}>
        <div className="container mx-auto max-w-4xl">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Feito para startups que:
          </motion.h2>
          <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4 mt-10 max-w-2xl mx-auto">
            {[
              "Gastam até R$ 500 mil/ano em AWS",
              "Têm time enxuto e precisam de ganho rápido",
              "Estão escalando produtos (e o billing começou a \"morder\")",
              "Querem previsibilidade para o Financeiro e autonomia para Engenharia",
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 bg-card rounded-xl border border-border p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 bg-muted rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Não é para você se:</strong> você tenta resolver o custo de cloud de forma 100% manual ou está em outra cloud que não seja AWS (por enquanto).
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="text-center mt-8">
            <Button size="lg" onClick={scrollToForm} className="rounded-full px-8 py-6 text-base font-semibold gap-2">
              Quero reduzir meus custos de cloud
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </MotionSection>

      {/* O que você vai ganhar */}
      <MotionSection className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            O que você vai ganhar
          </motion.h2>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye, time: "Em 1 dia", subtitle: "você enxerga:",
                points: ["Onde está o desperdício real", "Top ações de economia priorizadas por impacto e esforço", "Como seus custos estão alocados"],
              },
              {
                icon: Settings, time: "Em 15 dias", subtitle: "você implementa:",
                points: ["Recomendações práticas (rightsizing, recursos ociosos, storage, commitments etc.)", "Guardrails para o custo não voltar", "Um ritual simples de governança (sem burocracia)"],
              },
              {
                icon: Rocket, time: "Em 60 dias", subtitle: "você decide:",
                points: ["Segue com a ferramenta e escala o processo", "— ou —", "Volta para a época em que custo de cloud era caixa preta"],
              },
            ].map((phase) => (
              <motion.div key={phase.time} variants={fadeUp} whileHover={{ y: -4 }} className="bg-card rounded-2xl border border-border p-8">
                <phase.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground">{phase.time}</h3>
                <p className="text-muted-foreground text-sm mb-4">{phase.subtitle}</p>
                <ul className="space-y-2">
                  {phase.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      {point === "— ou —" ? (
                        <span className="text-center w-full text-xs italic">{point}</span>
                      ) : (
                        <><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />{point}</>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Button size="lg" onClick={scrollToForm} className="rounded-full px-8 py-6 text-base font-semibold gap-2">
              Quero 2 meses grátis <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </MotionSection>

      {/* Como funciona */}
      <MotionSection className="py-24 px-6" style={{ backgroundColor: 'hsl(var(--highlight-bg-alt))' }}>
        <div className="container mx-auto max-w-3xl">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Como funciona
          </motion.h2>
          <motion.div variants={stagger} className="space-y-6">
            {[
              { step: 1, title: "Aplicação (2 min)", desc: "Preencha suas informações e entraremos em contato." },
              { step: 2, title: "Conexão na AWS (guiada por especialista)", desc: "Leitura segura das métricas necessárias." },
              { step: 3, title: "Diagnóstico automático", desc: "Desperdícios + oportunidades por prioridade." },
              { step: 4, title: "Plano de ação", desc: "O que fazer, quem faz, e impacto estimado." },
              { step: 5, title: "Governança", desc: "Monitoramento contínuo do que importa." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="text-center mt-12">
            <Button size="lg" onClick={scrollToForm} className="rounded-full px-8 py-6 text-base font-semibold gap-2">
              Quero o teste grátis <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </MotionSection>

      {/* Por que agora */}
      <MotionSection className="py-24 px-6 bg-secondary">
        <motion.div variants={scaleIn} className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Por que agora?
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-10">
            Essa é a primeira turma. Você entra no early access com:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
            {[
              "2 meses gratuitos",
              "Acesso antecipado às novas features",
              "Roadmap influenciado pelos seus casos reais",
              "Suporte próximo (turma pequena de 20 startups)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <Star className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-secondary-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-secondary-foreground/60 text-sm">
            Vagas limitadas porque queremos acompanhar de perto e ajustar rapidamente.
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={scrollToForm} className="rounded-full px-8 py-6 text-base font-semibold gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              Quero participar do Early Access <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </MotionSection>

      {/* FAQ */}
      <MotionSection className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Perguntas frequentes
          </motion.h2>
          <motion.div variants={stagger}>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "\"Precisa de cartão pra testar?\"", a: "Não. Teste gratuito por 2 meses, sem cartão." },
                { q: "\"Vai dar trabalho pro time de engenharia?\"", a: "Pouco. A proposta é tirar trabalho, não criar. Você conecta, recebe prioridades e executa o que faz sentido." },
                { q: "\"É seguro?\"", a: "Sim — o acesso é configurado com permissões restritas e orientadas a leitura para o diagnóstico (detalhes no onboarding)." },
                { q: "\"Serve para qualquer startup?\"", a: "Para esta campanha: startups com AWS e gasto anual até R$ 500 mil." },
                { q: "\"E se eu não conseguir implementar tudo em 2 meses?\"", a: "Você ainda sai com um plano priorizado e melhorias aplicadas. A ferramenta é feita para evolução contínua." },
              ].map((faq, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                    <AccordionTrigger className="text-foreground font-semibold text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </MotionSection>

      {/* CTA Final */}
      <MotionSection className="py-24 px-6 bg-muted">
        <motion.div variants={scaleIn} className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Garanta uma das <span className="text-primary">20 vagas</span> do early access.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            2 meses gratuitos + foco total em reduzir desperdícios e dar previsibilidade ao seu custo de AWS.
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={scrollToForm} className="rounded-full px-8 py-6 text-base font-semibold gap-2">
              Quero uma das 20 vagas <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">Aplicação rápida. Sem cartão.</p>
          </div>
        </motion.div>
      </MotionSection>

      {/* Formulário */}
      <MotionSection className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-lg">
          <motion.div variants={scaleIn} className="bg-card rounded-2xl border border-border p-8 md:p-10" id="formulario-ea">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-2">
              Aplicação — Early Access Samax FinOps
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Preencha abaixo. Se você estiver dentro dos critérios, te chamamos em até 2h.
            </p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Perfeito, recebemos sua aplicação.</h3>
                <p className="text-muted-foreground">Se você estiver dentro dos critérios, te chamamos em até 2h para o onboarding.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="ea-name">Nome e sobrenome</Label>
                  <Input id="ea-name" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="ea-email">Email corporativo</Label>
                  <Input id="ea-email" type="email" required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="ea-whatsapp">WhatsApp</Label>
                  <Input id="ea-whatsapp" required maxLength={20} value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/\D/g, "") })} className="mt-1.5" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <Label htmlFor="ea-company">Empresa</Label>
                  <Input id="ea-company" required maxLength={100} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label>Cargo (opcional)</Label>
                  <Select value={formData.role} onValueChange={(v) => setFormData({ ...formData, role: v })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Selecione" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financas">Finanças</SelectItem>
                      <SelectItem value="engenharia">Engenharia</SelectItem>
                      <SelectItem value="ops">Ops</SelectItem>
                      <SelectItem value="founder">Founder</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Faixa de gasto anual AWS em BRL (opcional)</Label>
                  <Select value={formData.awsSpend} onValueChange={(v) => setFormData({ ...formData, awsSpend: v })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Selecione" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="creditos">Uso créditos mas quero testar</SelectItem>
                      <SelectItem value="100k">Até R$ 100k</SelectItem>
                      <SelectItem value="250k">Até R$ 250k</SelectItem>
                      <SelectItem value="500k">Até R$ 500k</SelectItem>
                      <SelectItem value="1m">Até R$ 1M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Principal dor hoje (opcional)</Label>
                  <Select value={formData.painPoint} onValueChange={(v) => setFormData({ ...formData, painPoint: v })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Selecione" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fatura">Fatura pesou</SelectItem>
                      <SelectItem value="previsibilidade">Falta de previsibilidade</SelectItem>
                      <SelectItem value="desperdicio">Desperdício</SelectItem>
                      <SelectItem value="chargeback">Chargeback</SelectItem>
                      <SelectItem value="outra">Outra</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.painPoint === "outra" && (
                    <Textarea placeholder="Descreva sua principal dor" maxLength={500} value={formData.painPointOther} onChange={(e) => setFormData({ ...formData, painPointOther: e.target.value })} className="mt-2" />
                  )}
                </div>
                <Button type="submit" className="w-full rounded-full py-6 text-base font-semibold gap-2">
                  Quero uma das 20 vagas <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[hsl(270_50%_18%)]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para reduzir seus custos de nuvem?
          </h2>
          <p className="text-purple-200/80 text-lg mb-8">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a economizar.
          </p>
          <button
            onClick={() => document.getElementById("formulario-ea")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center rounded-full bg-white text-purple-900 px-8 py-3 text-base font-semibold hover:bg-purple-50 transition-colors"
          >
            Aplicar agora
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EarlyAccess;
