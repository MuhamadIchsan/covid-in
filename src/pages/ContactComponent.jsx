import React from 'react';

function ContactComponent() {
  return (
    <div>
      <div className="container pt-4 mb-5">
        <div className="row justify-content-center">
          <h1 className="text-primary fw-bold text-center mb-5">Tentang Pengembang Website</h1>
          <hr className="bg-light" />
          <br />
          <div className="col-lg-5">
            <img title="Profil Gambar" src="https://ichsanweb.netlify.app/static/media/pp.ba11b258.webp" height="300" className="rounded-circle" alt="Foto Pengembang" />
          </div>
          <div className="col-lg-5 fw-bold pt-4">
            <div className="p-2 bg-glass mb-4 text-dark">
              <p className="fw-bold">Hai, terimakasih sudah Mengunjungi website Saya. Anda bisa mencari info terkait kasus COVID - 19 di setiap negara disini.</p>
            </div>
            <a href="https://www.instagram.com/muhamadichsan26/" title="Instagram">
              <img src="https://ichsanweb.netlify.app/static/media/ig.b759c96b.png" height="50" alt="Instagram Icon" />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href="https://www.linkedin.com/in/muhamadichsan26/" title="LinkedIn">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAQ0DJTSOVkv3AAACt0lEQVRo3u2ZTUhUURiGnzNK9IczREnYj5t+dSHhImwTpG00IYhaqSCE1a6/RVCUbSKCVrVsVREEQi5yESEtIqI2YaaRFqhESvSDQo5i+rYwhrkz34wGc+5tMd/q3vd8nPfh3POde869ACihTg0oqbAiqQF1Ks5iqFqjoVmnx4iqwSlBH1uJJkapiXEmMnuo5LTTAFWRAcA7pyQrIwSYcVKE9kAsh/6aDqpYz27aee6VwCiPWZ2QC+S0atpXLWYDLOiYgdmo32EB3M0xUrf9AGRPwmo3aAJsZgxHwSNzEo7a9uA+0194ewMgT+5IGAAr8uR6WbAyAXaoJGfurjAA1lFvJ2qvp5dWVl28ssZATr1hrQPSLWWVm675sbcBpC5VpJmX654ve2shWowkj3nBBOXU0cxaL08fgP/2dRxalBraHPf5GlDW0Zq2DHXzIdBawqHUGvGdbnp5zxjTOOJUUEsDzazKSWDMiwtG1slUa4/RWq45SVM6q9WmR0I3NLv8KmgwuqhNtd40LcY1pO35hlp1GrcArDmgvJo9aX/Q6IbzAbiX1PMzWy/UJGxxH5dKcYOc8gbg3iwr6yG9vkZguXE9aoBnfIsUwM2TUcYFBdBh9WhYY3qqNuXawD4J3pYu2etyzWPcof3vzRYaOKg2Z5Vsxqa3cCNwLmW/GC10mHnDLHgAUIJLWeJ56zG4aSZ8jMARyrK0bew0cyd9AOw31T3hAdhfWTaa6i8fAJtMdY2pzvsA+JfwUQU5wl6MAqtD5HvCIkARoAhQBCgCFAEsgDJDi6eujAO4XI7zv60GerC25Rc1xJeAsoGrqeujesAAwT6OpwGmR6seETy0Og6wLyBE/41oJlL/mRifIgUYjtEVKUCXU5w+KiOyH6Em5iZpyvubwqd9k5sCQHFdUX+ov+/f6rLKAP4AF/3qrn6xSrgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMTNUMDM6Mzc6NTIrMDA6MDB7s/MgAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTEzVDAzOjM3OjUyKzAwOjAwCu5LnAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                height="50"
                alt="Instagram Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
