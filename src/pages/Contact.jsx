import { useState } from 'react'
import { SHOP } from '../config.js'

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // Le formulaire ouvre WhatsApp avec le message pré-rempli (aucun backend nécessaire)
  const send = (e) => {
    e.preventDefault()
    const text = `Bonjour Maison Michelle,\n\n${f.message}\n\n— ${f.name}${f.phone ? ' (' + f.phone + ')' : ''}`
    window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="container section narrow">
      <h1 className="page-title">Contact</h1>
      <div className="contact-grid">
        <div>
          <p><b>WhatsApp</b><br /><a href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noreferrer">{SHOP.whatsappDisplay}</a></p>
          {SHOP.email && <p><b>E-mail</b><br /><a href={`mailto:${SHOP.email}`}>{SHOP.email}</a></p>}
          <p><b>Basée à</b><br />{SHOP.city}</p>
          {(SHOP.instagram || SHOP.facebook || SHOP.tiktok) && (
            <p><b>Réseaux sociaux</b><br />
              {[['Instagram', SHOP.instagram], ['Facebook', SHOP.facebook], ['TikTok', SHOP.tiktok]]
                .filter(([, u]) => u)
                .map(([n, u], i) => (
                  <span key={n}>{i > 0 && ' · '}<a href={u} target="_blank" rel="noreferrer">{n}</a></span>
                ))}
            </p>
          )}
        </div>
        <form className="form" onSubmit={send}>
          <div className="field"><label>Nom</label><input required value={f.name} onChange={set('name')} /></div>
          <div className="field"><label>Téléphone (facultatif)</label><input type="tel" value={f.phone} onChange={set('phone')} /></div>
          <div className="field"><label>Message</label><textarea required rows="4" value={f.message} onChange={set('message')} /></div>
          <button className="btn block">Envoyer via WhatsApp</button>
        </form>
      </div>
    </div>
  )
}
