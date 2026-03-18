import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, Zap, Shield, TrendingDown, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            FinOps com <span className="text-primary">método</span>, não achismo.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A Samax ajuda empresas brasileiras a reduzirem custos de nuvem com dados, governança e ação contínua.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <Link to="/radar" className="group block">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-card rounded-2xl border border-border p-8 hover:border-primary/40 transition-colors h-full text-left"
                >
                  <BarChart3 className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    Radar da Nuvem 2025
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    Benchmarks reais de cloud para CFOs, CTOs e FinOps. Gratuito.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Acessar Report <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link to="/early-access" className="group block">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsl(var(--accent) / 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-card rounded-2xl border border-border p-8 hover:border-accent/40 transition-colors h-full text-left"
                >
                  <Zap className="w-8 h-8 text-accent mb-4" />
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    Samax FinOps — Early Access
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    Reduza seu custo de AWS em dias. 20 vagas, 2 meses grátis.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-foreground group-hover:gap-2 transition-all">
                    Aplicar agora <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Por que Samax */}
      <section className="py-24 px-6" style={{ backgroundColor: 'hsl(var(--highlight-bg))' }}>
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que <span className="text-primary">Samax</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Muito mais do que monitoramento. A gente帮你 reduzir custos de cloud de verdade.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeUp} className="bg-card/80 backdrop-blur rounded-2xl border border-border p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Redução Garantida
              </h3>
              <p className="text-muted-foreground text-sm">
                Metodologia comprovada para reduzir AWS em 30-50% sem comprometer performance ou segurança.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-card/80 backdrop-blur rounded-2xl border border-border p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Governança Completa
              </h3>
              <p className="text-muted-foreground text-sm">
                Policies, tagging, alertas e relatórios para você dormir tranquilo sobre compliance.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-card/80 backdrop-blur rounded-2xl border border-border p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Tempo Recuperado
              </h3>
              <p className="text-muted-foreground text-sm">
                Automação que elimina horas de planilhas manuais. Time de FinOps focado no que importa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[hsl(270_50%_18%)]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para reduzir seus custos de nuvem?
          </h2>
          <p className="text-purple-200/80 text-lg mb-8">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a economizar.
          </p>
          <a
            href="/radar"
            className="inline-flex items-center justify-center rounded-full bg-white text-purple-900 px-8 py-3 text-base font-semibold hover:bg-purple-50 transition-colors"
          >
            Ver Report
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
