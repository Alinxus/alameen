import Nav from './components/Nav'

export default function Home() {
  return (
    <div className="container">
      <Nav />
      <main>
        <h1>Al-ameen Olajide</h1>
        
        <p>software engineer based in lagos, nigeria</p>
        
        <p>this is my personal public diary. documenting my journey, thoughts on religion, politics, education, tech, and life. everything i learn, build, and think about.</p>
        
        <p>self-taught since 2020. currently studying computer science at lagos state university.</p>
        
        <p>built 3 failed projects before finding success - grazias (saas for collecting testimonials), an openai api wrapper for writing articles (2022), and another that didnt work out. learned more from those failures than anything else.</p>
        
        <p>most recently worked as a full-stack systems engineer at costcrunch (nyc, remote) where i architected enterprise-grade multi-tenant infrastructure with zero-trust security architecture, designed high-performance semantic search systems processing massive datasets with sub-millisecond latency, and engineered fault-tolerant event-driven systems with kafka.</p>
        
        <p>now building <a href="https://usewhisper.dev">whisper</a> - an ai-powered code security platform that catches vulnerabilities through advanced execution flow analysis. enterprise-grade security auditing with cli, rest api, and web interface used by development teams worldwide.</p>
        
        <p>specialize in distributed systems architecture, real-time data processing, blockchain security protocols, and production-scale machine learning infrastructure.</p>
        
        <h2>ramadan food project</h2>
        <p>starting an organization to feed people during ramadan. the last two years i had nothing to eat for iftar or suhur. now im working to make sure others dont go through that.</p>
        
        <p>donations:</p>
        <ul>
          <li>palmpay: 8120997879</li>
          <li>name: Olajide Al-ameen</li>
        </ul>
        
        <p>every donation received and every expense will be posted on this website. full transparency. <a href="/articles/donations-tracker">see donations tracker</a> | <a href="/articles/ramadan-food-project">read more</a></p>
        
        <h2>contact</h2>
        <ul>
          <li><a href="mailto:olajidealameen4@gmail.com">olajidealameen4@gmail.com</a></li>
          <li><a href="https://x.com/alameenpd">x.com/alameenpd</a></li>
          <li><a href="https://github.com/Alinxus">github.com/Alinxus</a></li>
        </ul>
      </main>
    </div>
  )
}
