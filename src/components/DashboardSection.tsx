import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dashboardMetrics, workflowStages } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { 
  LayoutDashboard, 
  BarChart3, 
  BrainCircuit, 
  BriefcaseBusiness,
  Play,
  RotateCcw,
  Cpu,
  Server,
  Terminal,
  Activity,
  CheckCircle2
} from "lucide-react";

type SimStep = "idle" | "preprocess" | "train" | "deploy" | "predict";
type ModelType = "KNN" | "Random Forest" | "Logistic Regression";

export function DashboardSection() {
  const [simStep, setSimStep] = useState<SimStep>("idle");
  const [model, setModel] = useState<ModelType>("Random Forest");
  const [terminal, setTerminal] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [features, setFeatures] = useState({ age: 45, cholesterol: 220, maxHeartRate: 150 });
  const [prediction, setPrediction] = useState<{ risk: string; confidence: string } | null>(null);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminal]);

  const addLog = (msg: string, delay = 0) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setTerminal((prev) => [...prev, `[system@varun-ds] $ ${msg}`]);
        resolve();
      }, delay);
    });
  };

  const startSimulation = async () => {
    setSimStep("preprocess");
    setTerminal([]);
    setProgress(0);
    setPrediction(null);

    await addLog("Initializing ML Pipeline Simulator...", 100);
    await addLog("Loading raw dataset: heart_disease_clinical_records.csv", 400);
    await addLog("Scanning for null values and anomalous outliers...", 300);
    
    // Simulate preprocessing progress
    for (let p = 10; p <= 100; p += 15) {
      const currentVal = Math.min(p, 100);
      setProgress(currentVal);
      if (currentVal === 40) {
        await addLog(" -> Found 14 missing values in 'cholesterol' column. Imputing with median.", 250);
      }
      if (currentVal === 70) {
        await addLog(" -> Normalizing features using StandardScaler wrapper...", 200);
      }
      if (currentVal === 100) {
        await addLog("Preprocessing complete: 303 rows processed, 3 target classes cleaned.", 300);
      }
    }

    setSimStep("train");
    await addLog(`Selected model archetype: ${model}`, 400);
    await addLog("Splitting data: train_size = 0.8, test_size = 0.2 (stratified)...", 300);
    await addLog("Starting model training optimization loop...", 400);

    // Simulate training epochs
    const epochs = [
      { epoch: 1, loss: 0.648, acc: 0.64 },
      { epoch: 2, loss: 0.412, acc: 0.79 },
      { epoch: 3, loss: 0.294, acc: 0.86 },
      { epoch: 4, loss: 0.185, acc: 0.90 },
      { epoch: 5, loss: 0.118, acc: 0.925 }
    ];

    for (const ep of epochs) {
      await addLog(`Epoch ${ep.epoch}/5 - cross_entropy: ${ep.loss} - accuracy: ${ep.acc}`, 500);
    }
    
    await addLog(`Training finished. Final CV Score: ${(parseFloat(epochs[4].acc.toString()) * 100).toFixed(1)}%`, 300);

    setSimStep("deploy");
    await addLog("Serializing trained model into binary pickle format...", 400);
    await addLog("Building lightweight Docker microservice container...", 400);
    await addLog("Deploying API server instance to Render web framework...", 500);
    await addLog("Pinging health endpoint... 200 OK", 600);
    await addLog("API Router successfully mapped to: https://api.varun.ai/v1/predict", 300);

    setSimStep("predict");
  };

  const handlePredict = () => {
    // Basic clinical logic for realistic prediction simulation
    let riskFactor = 0;
    if (features.age > 55) riskFactor += 1.5;
    if (features.cholesterol > 240) riskFactor += 2.0;
    if (features.maxHeartRate < 130) riskFactor += 1.8;

    const risk = riskFactor > 3.0 ? "High Risk" : "Low Risk";
    const confidenceVal = 78 + Math.round((Math.sin(features.age + features.cholesterol) + 1) * 10);
    
    setPrediction({
      risk,
      confidence: `${confidenceVal}%`
    });
  };

  const resetSim = () => {
    setSimStep("idle");
    setTerminal([]);
    setProgress(0);
    setPrediction(null);
  };

  return (
    <section id="dashboard" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interactive Sandbox"
          title="Live Data Science Pipeline Simulator"
          description="Click to run a simulated machine learning workflow. Watch how raw data is parsed, cleaned, used for training models, and mapped to predictions."
        />

        <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-panel p-5"
                >
                  <metric.icon className="h-8 w-8 text-neon animate-pulse" />
                  <p className="mt-5 font-display text-3xl text-white">{metric.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl text-white">Target Workflow Pulse</h3>
                <span className="text-[11px] uppercase tracking-[0.2em] text-cyanGlow">
                  pipeline status
                </span>
              </div>
              <div className="mt-8 space-y-5">
                {workflowStages.map((stage, index) => (
                  <motion.div
                    key={stage.name}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-200">{stage.name}</span>
                      <span className="font-display text-sm text-neon">{stage.value}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stage.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + index * 0.08, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-neon via-mint to-violet"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive ML Simulator Panel */}
          <div className="glass-panel relative flex flex-col overflow-hidden p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-neon" />
                <h3 className="font-display text-lg font-semibold text-white">ML Pipeline Sandbox</h3>
              </div>
              <div className="flex gap-2">
                <span className={`rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-widest ${
                  simStep === "predict" ? "bg-mint/10 text-mint border border-mint/20" : "bg-neon/10 text-neon border border-neon/20 animate-pulse"
                }`}>
                  {simStep === "idle" && "Idle"}
                  {simStep === "preprocess" && "Cleaning Data"}
                  {simStep === "train" && "Training ML Model"}
                  {simStep === "deploy" && "Deploying API"}
                  {simStep === "predict" && "Sandbox Active"}
                </span>
              </div>
            </div>

            {/* Model Archetype Selector (only in idle state) */}
            {simStep === "idle" ? (
              <div className="mt-6 flex-1">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Step 1: Choose Algorithm Archetype
                </h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {(["Random Forest", "KNN", "Logistic Regression"] as ModelType[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => setModel(m)}
                      className={`rounded-2xl border p-4 text-left transition-all ${
                        model === m
                          ? "border-neon/40 bg-neon/10 text-white shadow-glow"
                          : "border-white/10 bg-white/[0.04] text-slate-400 hover:text-white"
                      }`}
                    >
                      <Cpu className="h-5 w-5 text-neon mb-3" />
                      <span className="block text-xs font-semibold uppercase tracking-wider">{m}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-8 text-center bg-slate-950/20">
                  <Play className="h-10 w-10 text-slate-500 mb-4 animate-bounce" />
                  <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
                    Once selected, click the button below to initiate the pipeline sequence.
                  </p>
                  <button
                    onClick={startSimulation}
                    className="button-primary mt-6 px-8 py-3"
                  >
                    Start ML Pipeline
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex flex-1 flex-col justify-between">
                {/* Simulated CLI Terminal */}
                <div className="relative rounded-2xl border border-white/10 bg-slate-950/80 p-4 font-mono text-xs text-slate-300 min-h-[12rem] max-h-[14rem] overflow-y-auto">
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-1.5 pb-2">
                    {terminal.map((line, idx) => (
                      <div key={idx} className={line.includes("->") ? "text-neon/90 pl-3" : line.includes("complete") || line.includes("OK") ? "text-mint font-semibold" : ""}>
                        {line}
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>
                </div>

                {/* Processing and training states */}
                {simStep !== "predict" && (
                  <div className="mt-6 flex flex-col justify-center items-center flex-1">
                    {simStep === "preprocess" && (
                      <div className="w-full text-center">
                        <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Preprocessing Progress</p>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-neon transition-all duration-300" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    )}
                    {simStep === "train" && (
                      <div className="flex items-center gap-3 text-neon animate-pulse text-sm">
                        <BrainCircuit className="h-6 w-6" />
                        <span>Running Optimizer (Gradient Descent)...</span>
                      </div>
                    )}
                    {simStep === "deploy" && (
                      <div className="flex items-center gap-3 text-violet animate-pulse text-sm">
                        <Server className="h-6 w-6" />
                        <span>Pushing endpoints to container...</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Final Prediction State - Active Sandbox */}
                <AnimatePresence>
                  {simStep === "predict" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 space-y-4"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-mint" />
                        Step 4: Test Live API Endpoint
                      </h4>
                      <p className="text-xs text-slate-400">
                        Adjust clinical inputs below to run real-time inference on your trained model.
                      </p>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="space-y-2">
                          <label className="flex justify-between text-[10px] uppercase text-slate-400">
                            <span>Age</span>
                            <span className="text-neon">{features.age}</span>
                          </label>
                          <input
                            type="range"
                            min="20"
                            max="90"
                            value={features.age}
                            onChange={(e) => setFeatures({ ...features, age: parseInt(e.target.value) })}
                            className="w-full accent-neon cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="flex justify-between text-[10px] uppercase text-slate-400">
                            <span>Cholesterol</span>
                            <span className="text-neon">{features.cholesterol} mg/dl</span>
                          </label>
                          <input
                            type="range"
                            min="150"
                            max="350"
                            value={features.cholesterol}
                            onChange={(e) => setFeatures({ ...features, cholesterol: parseInt(e.target.value) })}
                            className="w-full accent-neon cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="flex justify-between text-[10px] uppercase text-slate-400">
                            <span>Max Heart Rate</span>
                            <span className="text-neon">{features.maxHeartRate} bpm</span>
                          </label>
                          <input
                            type="range"
                            min="80"
                            max="220"
                            value={features.maxHeartRate}
                            onChange={(e) => setFeatures({ ...features, maxHeartRate: parseInt(e.target.value) })}
                            className="w-full accent-neon cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <button
                          onClick={handlePredict}
                          className="button-primary px-6 py-2.5 text-xs uppercase tracking-wider"
                        >
                          Send inference request
                        </button>
                        <button
                          onClick={resetSim}
                          className="button-secondary p-2.5 rounded-full"
                          title="Reset sandbox"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </button>
                      </div>

                      {prediction && (
                        <motion.div
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 flex items-center justify-between"
                        >
                          <div>
                            <span className="text-[10px] uppercase text-slate-400 block">API Prediction</span>
                            <span className={`text-lg font-bold ${prediction.risk === "High Risk" ? "text-coral" : "text-mint"}`}>
                              {prediction.risk}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] uppercase text-slate-400 block">Confidence Interval</span>
                            <span className="text-base font-semibold text-white">
                              {prediction.confidence}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
