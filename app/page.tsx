import Nav from './components/Nav'
import Subscribe from './components/Subscribe'

export default function Home() {
  return (
    <div className="container">
      <Nav />
      <main>
        <h1>Al-ameen Olajide</h1>
        
        <p>software engineer based in lagos, nigeria</p>
        
        <p>this is my personal public diary. documenting my journey, thoughts on religion, politics, education, tech, and life. everything i learn, build, and think about.</p>
        
        <p>self-taught since 2020. currently studying computer science at lagos state university.</p>
        
        <p>now building <a href="https://badtheorylabs.com">bad theory labs</a> - an independent ai research lab in lagos shipping open models, agent infrastructure, native runtimes, and reproducible research. the principle: build ambitious systems, measure them without mercy, ship what survives.</p>

        <p>our latest is <a href="https://huggingface.co/badtheorylabs/BTL-4">btl-4</a>, a 35b open-weight agentic reasoning model trained on an execution-gated corpus - trajectories were kept only where the code actually ran and passed its tests. 78.4% on swe-bench verified, 73.5% on bfcl v4, 262k native context, apache 2.0.</p>

        <p><a href="https://huggingface.co/badtheorylabs/BTL-4-Compact">btl-4 compact</a> is the same model in a single 9.96gb file at 2.30 bits per weight, retaining 94.1% of full-precision behaviour. it loads in llama.cpp, ollama, and lm studio - a frontier-class coding model on hardware you already own. btl runtime is our openai-compatible inference api with multi-provider routing.</p>

        <p><a href="https://retaindb.com">retaindb</a> is the persistent memory layer for agents - memory that survives across sessions, grounded retrieval, sub-40ms lookups. state of the art on longmemeval preference recall.</p>

        <p>previously a full-stack systems engineer at costcrunch (nyc, remote) where i architected enterprise-grade multi-tenant infrastructure with zero-trust security architecture, designed high-performance semantic search systems processing massive datasets with sub-millisecond latency, and engineered fault-tolerant event-driven systems with kafka.</p>

        <p>specialize in distributed systems architecture, real-time data processing, blockchain security protocols, and production-scale machine learning infrastructure.</p>
        
        <Subscribe />
        
        <h2>Contact</h2>
        <ul>
          <li><a href="mailto:olajidealameen4@gmail.com">olajidealameen4@gmail.com</a></li>
          <li><a href="https://x.com/alameenpd">x.com/alameenpd</a></li>
          <li><a href="https://github.com/Alinxus">github.com/Alinxus</a></li>
        </ul>
      </main>
    </div>
  )
}
