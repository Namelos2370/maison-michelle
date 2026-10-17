import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <div className="container section narrow">
      <h1 className="page-title">Notre histoire</h1>
      <p className="lead dark">Maison Michelle, c’est l’art du crochet porté avec élégance.</p>
      <p>
        {/* ✏️ À remplacer par le vrai texte de Michelle */}
        Derrière chaque création se trouve Michelle, passionnée de fil et de belles matières. Chaque vêtement, chaque sac et chaque accessoire est réalisé à la main, point après point, avec le souci du détail et l’envie de proposer une mode féminine, élégante et durable.
      </p>
      <h2>Nos valeurs</h2>
      <ul className="values">
        <li><b>Savoir-faire artisanal</b> — des pièces uniques, jamais produites à la chaîne.</li>
        <li><b>Élégance</b> — des coupes féminines et des finitions soignées.</li>
        <li><b>Transparence</b> — délais, prix et frais clairement annoncés avant confirmation.</li>
        <li><b>Proximité</b> — un échange humain à chaque commande.</li>
      </ul>
      <Link to="/boutique" className="btn">Voir les créations</Link>
    </div>
  )
}
