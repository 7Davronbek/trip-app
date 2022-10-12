import React from 'react'
import Bg from '../images/kruiz-bg.jpg'
import kruizinfo from '../images/kruiz-info.jpg'

export default function Kruiz() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">KRUIZ O'rtayer dengizi Barselonadan</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>KRUIZ O'RTAYER DENGIZI BARSELONADAN</h2>
          </div>

          <div className="country-info__info">
            <img src={kruizinfo} alt="" />
            <div className='country-info__info-texts'>
              <span>7 kecha / 8 kun</span>
              <h3>KRUIZ O'RTAYER DENGIZI BARSELONADAN</h3>

              <p><span className='bold-span'>Yo'nalish: </span>Barselona - Marsel (Provans) - Jenoa - Lerici (La Speziya, Florensiya) - <br /> Neapol - Valensiya - Barselona <br />
                Sanalar: 01/01/2021 - 05/07/2021
              </p>

              <p>Kompaniya: <span className='bold-span'>Costa Cruises</span></p>
              <p>
                ichki kayuta:    752 $ USD <br />
                tashqi kayuta: 881 $ USD <br />
                balkon bilan:   987 $ USD <br />
                Suite:  1376 $ USD
              </p>

              <p>Narx kishi boshiga ikki kishilik yashash asosida ko'rsatiladi</p>

              <p>
                1 kun Barselona <br />
                2 kun Marsel (Provans) <br />
                3 kun Jenoa <br />
                4 kun Lerici (La Spezia, Florensiya) <br />
                5-kun Neapol <br />
                6 kun Dengizda  <br />
                7-kun Valensiya <br />
                8-kun Barselona
              </p>

              <p>
                Narxiga kiritilgan: <br />
                ovqatlanish - to'liq pansionat (nonushta, tushlik, tushdan keyin choy, kechki ovqat, <br /> tungi boyqushlar uchun bufet); <br />
                port badallari; <br />
                tanlangan toifadagi kabinada turar joy; <br />
                kema bortidagi ko'ngilochar va ta'lim dasturlari; <br />
                bortda rus tilida so'zlashadigan xodimning xizmatlari 
              </p>

              <p>
                Qo'shimcha to'lanadi: <br />
                viza; <br />
                havo qatnovi; <br />
                pul o'tkazmalari; <br />
                tibbiy sug'urta; <br />
                sayohatni bekor qilishni sug'urtalash; <br />
                kemada: ichimliklar (suv, sharbatlar, alkogolli ichimliklar, kokteyllar); <br />
                uchi (kruiz oxirida kemada to'lanadi); <br />
                kirish turistik vizasini rasmiylashtirish.
              </p>

              <h4>———————————</h4>
              <p><span className='bold-span'>Trip My Dream</span> ekspert sharhi:</p>
              <p>Costa Cruises ko'p millatli yo'lovchilar va qiziqarli marshrutlar bilan Evropa kruizlarida ko'plab afzalliklarga ega. Bularning barchasi juda arzon narxlar bilan mukammal birlashtirilgan. Ammo mavsumning eng qizg'in pallasida, bolalar ta'tillari paytida ularning hovuzlari doimo shovqin va kichkina mehmonlarning hayqiriqlariga to'la.</p>
              <p>Muhim: Costa Cruises kemalarida xizmat narxi (uchi) suzib yurgan mintaqaga bog'liq.</p>

              <p>"Costa Cruises" kruiz kompaniyasi 50 yildan ortiq vaqt davomida kruiz biznesida ishlaydi va Evropaning eng yirik kompaniyalaridan biri hisoblanadi. 1959 yilda Costa Cruises birinchi kompaniya bo'lib, Karib dengizida bir haftalik kruizni taklif qildi. Bir yil o'tgach, kruiz taklif qilindi, unga havo sayohati ham kiradi. 1993 yildan beri kompaniya asosan Evropada kruizlarni taklif qila boshladi va sakkizta kemadan faqat ikkitasi Amerika portlarida, keyin esa faqat qishda ishlash uchun qoldi.</p>
              <p>Costa Cruises "Italiya uslubidagi kruizlar" ni taklif etadi, u italiyalik uslubni dizayndan tortib to oziq-ovqatgacha: kemalarning nafis interyerlari, italyan darslari, eng yaxshi haqiqiy italyan oshxonasi retseptlari bilan oshpazlik namoyishlari va yuqori hayotiyligini namoyish etadi.</p>
              <p>Costa Cruises kruizlari oilaviy ta'til uchun eng yaxshi tanlovdir: 18 yoshgacha bo'lgan bolalar bepul sayohat qilishadi, faqat port soliqlarini to'laydilar va bortda barcha yoshdagi bolalar uchun intensiv ko'ngilochar dastur mavjud. Kosta kruizlarining asosiy afzalliklaridan biri bu narx va sifatning ajoyib kombinatsiyasi.</p>
              <p>Filo sig'imi 74 dan 112 ming tonnagacha bo'lgan 10 laynerdan iborat.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
