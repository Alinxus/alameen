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

        <p>we released btl-3, a 27b open-weight model for agentic coding and structured tool use - 95.12% on humaneval, 88.5% on bfcl v4, 262k context, and it fits under 8gb. btl runtime is an openai-compatible inference api with multi-provider routing.</p>

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
