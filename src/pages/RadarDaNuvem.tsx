import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  BarChart3,
  TrendingDown,
  Users,
  Database,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Code2,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn, rollDown } from "@/lib/animations";

const MotionSection = ({ children, className, style, id }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; id?: string }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className={className}
    style={style}
    id={id}
  >
    {children}
  </motion.section>
);

const RadarDaNuvem = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    companySize: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    
    const dataWithTimestamp = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(dataWithTimestamp)], { type: "application/form-data" });

    try {
      await fetch('https://samax.app.n8n.cloud/webhook/formulario-radar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: blob
      });
    } catch (error) {
      console.error('Erro ao enviar:', error);
    }

    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
        {/* Bolinhas flutuantes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-50, -400 - Math.random() * 200],
              opacity: [0, 0.8, 0],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
            className="absolute rounded-full pointer-events-none blur-[2px]"
            style={{
              width: 6 + Math.random() * 14,
              height: 6 + Math.random() * 14,
              left: `${5 + Math.random() * 90}%`,
              bottom: `-${Math.random() * 30}px`,
              background: `hsl(${270 + Math.random() * 20}, ${60 + Math.random() * 20}%, ${70 + Math.random() * 20}%)`,
            }}
          />
        ))}
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.45, 0.65, 0.45],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-[100px] translate-x-1/3 pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.30, 0.50, 0.30],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            opacity: [0.25, 0.40, 0.25],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-300/10 rounded-full blur-[60px] pointer-events-none" 
        />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1.5 text-sm font-medium text-brand-purple mb-8"
          >
            <BarChart3 className="w-4 h-4" />
            Report 2025 — Acesso gratuito
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            Receba o Report{" "}
            <span className="text-brand-purple">Radar da Nuvem 2025</span>{" "}
            e compare seus custos com o mercado.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Benchmarks reais de cloud para <strong className="text-foreground">CFOs, CTOs e FinOps</strong>: dados de empresas brasileiras, insights práticos e uma visão clara de onde a nuvem está vazando custo.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-left"
          >
            <div className="flex flex-col gap-3">
              {[
                "Entenda o que está puxando seu gasto (e por quê)",
                "Compare sua maturidade com outras empresas",
                "Leve argumentos para budget, governança e otimização",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={0.4} variants={fadeUp} className="mt-10">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="rounded-full px-8 py-6 text-base font-semibold gap-2 bg-brand-purple text-brand-purple-foreground hover:bg-brand-purple/90"
            >
              Quero receber o Report 2025
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Leva menos de 1 minuto. Acesso imediato no seu e-mail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dados / Destaques */}
      <MotionSection id="o-que-recebe" className="py-24 px-6" style={{ backgroundColor: 'hsl(270 60% 15%)' }}>
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              O que você vai encontrar no{" "}
              <span className="text-purple-300">Report 2025</span>
            </h2>
            <p className="mt-4 text-purple-200/80 text-lg max-w-2xl mx-auto">
              Um retrato do custo de nuvem no Brasil — com benchmarks para orientar decisões de tecnologia e finanças sem achismo.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Database, value: "3.000+", label: "pontos de dados" },
              { icon: Users, value: "130+", label: "empresas participantes" },
              { icon: TrendingDown, value: "Insights", label: "sobre desperdício, eficiência e governança de cloud" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-500/30"
              >
                <stat.icon className="w-8 h-8 text-purple-300 mx-auto mb-4" />
                <div className="font-display text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <p className="mt-2 text-purple-200/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* Apoiadores */}
      <MotionSection className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl font-bold text-purple-700 mb-6">
            Obrigado aos nossos apoiadores
          </p>
          <div className="flex items-center justify-center gap-8">
            <img src="/confraria.png" alt="Confraria" className="h-12 w-auto" />
            <span className="text-xl text-muted-foreground">|</span>
            <img src="/magalucloud.png" alt="MagaluCloud" className="h-12 w-auto" />
          </div>
        </div>
      </MotionSection>

      {/* Para quem é */}
      <MotionSection id="para-quem" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Para quem é o Radar?
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Para CFOs",
                subtitle: "Finanças",
                headline: "Transforme cloud em uma despesa governável",
                points: [
                  "Mais previsibilidade e controle sem travar o time técnico",
                  "Argumentos para cortar desperdício sem cortar inovação",
                  "Visão comparativa para apoiar decisões de budget",
                ],
              },
              {
                icon: Code2,
                title: "Para CTOs",
                subtitle: "Tecnologia",
                headline: "Decida com dados (e defenda prioridades com confiança)",
                points: [
                  "Benchmarks para justificar arquitetura, observabilidade e governança",
                  "Sinais de maturidade e padrões de eficiência em escala",
                  "O que as empresas estão fazendo para gastar melhor",
                ],
              },
              {
                icon: LineChart,
                title: "Para FinOps",
                subtitle: "Operações",
                headline: "Compare maturidade e encontre alavancas reais",
                points: [
                  "Direcionadores de custo, eficiência e accountability",
                  "Insights para otimização contínua (não só \"one-shot savings\")",
                  "Benchmark para calibrar métricas e roadmap de FinOps",
                ],
              },
            ].map((persona) => (
              <motion.div
                key={persona.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-brand-purple/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                    <persona.icon className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {persona.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{persona.subtitle}</span>
                  </div>
                </div>
                <p className="font-semibold text-foreground mb-4">{persona.headline}</p>
                <ul className="space-y-2">
                  {persona.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="rounded-full px-8 py-6 text-base font-semibold gap-2 bg-brand-purple text-brand-purple-foreground hover:bg-brand-purple/90"
            >
              Quero receber o Radar da Nuvem 2025
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </MotionSection>

      {/* O que você recebe */}
      <MotionSection className="py-24 px-6" style={{ backgroundColor: 'hsl(var(--highlight-bg-alt))' }}>
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            O que você recebe
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.1} className="text-muted-foreground text-lg mb-10">
            Ao preencher o formulário, você recebe:
          </motion.p>
          <motion.div variants={stagger} className="flex flex-col gap-4 text-left max-w-md mx-auto">
            {[
              "Acesso ao Report Radar da Nuvem 2025",
              "Resumo executivo (perfeito para compartilhar internamente)",
              "Convite para conteúdos do Blog da Nuvem e eventos (online e presenciais)",
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="rounded-full px-8 py-6 text-base font-semibold gap-2 bg-brand-purple text-brand-purple-foreground hover:bg-brand-purple/90"
            >
              Receber o Report agora
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </MotionSection>

      {/* Formulário */}
      <MotionSection className="py-24 px-6">
        <div className="container mx-auto max-w-lg">
          <motion.div 
            variants={rollDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 md:p-10"
            id="formulario"
          >
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-2">
              Preencha para receber o acesso imediato
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Sem spam. Seus dados são usados apenas para liberar o acesso.
            </p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Pronto! Confira seu e-mail.
                </h3>
                <p className="text-muted-foreground">
                  O Report Radar da Nuvem 2025 foi enviado para o seu e-mail corporativo.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail corporativo</Label>
                  <Input id="email" type="email" required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone (WhatsApp)</Label>
                  <Input id="phone" type="tel" required maxLength={20} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })} className="mt-1.5" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" required maxLength={100} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="role">Cargo</Label>
                  <Select value={formData.role} onValueChange={(v) => setFormData({ ...formData, role: v })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Selecione seu cargo" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cfo">CFO</SelectItem>
                      <SelectItem value="cto">CTO</SelectItem>
                      <SelectItem value="finops">FinOps</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="companySize">Tamanho da empresa</Label>
                  <Select value={formData.companySize} onValueChange={(v) => setFormData({ ...formData, companySize: v })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Selecione a faixa" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1–50 funcionários</SelectItem>
                      <SelectItem value="51-200">51–200 funcionários</SelectItem>
                      <SelectItem value="201-1000">201–1.000 funcionários</SelectItem>
                      <SelectItem value="1000+">1.000+ funcionários</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="peer sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all ${agreed ? 'bg-purple-600 border-purple-600' : 'border-gray-300 group-hover:border-purple-400'}`}>
                      {agreed && (
                        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Concordo com os <button type="button" onClick={() => setShowTerms(true)} className="text-purple-600 underline hover:text-purple-700">termos de uso</button>
                  </span>
                </label>
                <Button type="submit" disabled={!agreed} className="w-full rounded-full py-6 text-base font-semibold gap-2 bg-brand-purple text-brand-purple-foreground hover:bg-brand-purple/90 disabled:opacity-50 disabled:cursor-not-allowed">
                  Liberar acesso ao Report
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}

            <p className="mt-6 text-xs text-muted-foreground text-center">
              Sem spam. Seus dados são usados apenas para liberar o acesso e comunicar conteúdos do Radar. Você pode sair da lista quando quiser.
            </p>
          </motion.div>
        </div>
      </MotionSection>

      {/* FAQ */}
      <MotionSection id="faq" className="py-24 px-6 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
        <div className="container mx-auto max-w-2xl">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Perguntas frequentes
          </motion.h2>
          <motion.div variants={stagger}>
              <Accordion type="single" collapsible className="space-y-2">
                {[
                  { q: "Que tipos de empresas têm dados no Radar da Nuvem?", a: "Empresas que utilizam infraestrutura de nuvens públicas (Google Cloud Platform, AWS, Microsoft Azure, Oracle, Magalu Cloud, Hetzner e afins) de todos os portes." },
                  { q: "Os dados da minha empresa são divulgados publicamente?", a: "Não. Nenhum dado individual de nenhuma empresa é compartilhado. Todos os resultados disponibilizados são anonimizados e trazem apenas insights sobre o estado atual dos custos de nuvem no Brasil." },
                  { q: "Qual é a finalidade do Radar da Nuvem?", a: "Compartilhar benchmarks da indústria que joguem luz sobre as ineficiências existentes nas atuais práticas de uso de nuvem, permitindo que cada respondente racionalize seus custos por meio de iniciativas de eficiência fomentadas pelos dados." },
                  { q: "O acesso aos dados é gratuito?", a: "Sim, é gratuito. Os respondentes da pesquisa recebem acesso à plataforma de benchmarks, onde podem explorar os dados do mercado e comparar seus resultados às tendências." },
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
      <MotionSection className="py-24 px-6 bg-gradient-to-br from-brand-purple/10 via-brand-purple/5 to-transparent">
        <motion.div variants={scaleIn} className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Quer comparar sua cloud com o mercado e{" "}
            <span className="text-brand-purple">reduzir desperdícios</span> com método?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Receba agora o Report Radar da Nuvem 2025 e use os benchmarks para orientar Finanças, Tecnologia e FinOps na mesma direção.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="rounded-full px-8 py-6 text-base font-semibold gap-2 bg-brand-purple text-brand-purple-foreground hover:bg-brand-purple/90"
            >
              Liberar acesso ao Report
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="mt-3 text-sm text-muted-foreground/50">
              Acesso imediato no e-mail.
            </p>
          </div>
        </motion.div>
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
            onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center rounded-full bg-white text-purple-900 px-8 py-3 text-base font-semibold hover:bg-purple-50 transition-colors"
          >
            Receber Report
          </button>
        </div>
      </section>

      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Termos de Uso</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>✅ Concordo que os dados enviados sejam compartilhados com a equipe organizadora do Radar da Nuvem para fins de pesquisa.</p>
            <p>✅ Declaro ciência e concordo que as informações enviadas poderão ser acessadas e tratadas pela equipe organizadora do Radar da Nuvem para execução da pesquisa, incluindo análise, consolidação e elaboração de relatórios, respeitando a LGPD e boas práticas de segurança.</p>
            <p>✅ Autorizo o compartilhamento das informações fornecidas neste questionário com a equipe organizadora do Radar da Nuvem, exclusivamente para fins de análise, consolidação e comunicação dos resultados da pesquisa.</p>
          </div>
          <Button onClick={() => { setShowTerms(false); setAgreed(true); }} className="w-full mt-4 rounded-full bg-purple-600 text-white hover:bg-purple-700">
            Concordar e fechar
          </Button>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default RadarDaNuvem;
