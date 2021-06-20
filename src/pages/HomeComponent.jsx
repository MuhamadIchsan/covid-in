import React, {Component, useEffect, useState} from 'react';
import covidIcon from '../asset/covid.png';
import covidIlus from '../asset/covid-ilustration-2.png';
import axios from 'axios';

class Spinners extends Component {
  render() {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}

export default function CovidComponent() {
  const [covids, setCovids] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const options = {
    method: 'GET',
    url: 'https://covid-19-tracking.p.rapidapi.com/v1/Indonesia',
    headers: {
      'x-rapidapi-key': '2a83e41c31msh0b689309d2de4a6p1e5b7cjsn5a82ea23d8f6',
      'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
    }
  };

  useEffect(() => {
    setIsLoading(true);

    const getCovid = async () => {
      try {
        let response = await axios.request(options);
        setCovids(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCovid();
  }, []);

  return (
    <div>
      <React.Fragment>
        <section id="home">
          <div className="container">
            <div className="row justify-content-center pt-4 text-white ">
              <div className="col-lg-5 order-lg-2 pt-4">
                <h1 className="text-primary text-hero">
                  COVID<span className="text-white">.IN</span>{' '}
                </h1>
                <p className="lead fw-bold">Be Safe and Stay Safe</p>
                <hr className="my-2" />
                <p className="fw-bold">Cari informasi tentang COVID-19 menjadi lebih mudah.</p>
                <a className="btn btn-primary btn-lg" href="#info" role="button">
                  More
                </a>
              </div>
              <div className="col-lg-5 order-lg-1 mb-3">
                <img className="img-fluid" src={covidIlus} alt="Ilustration" />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section id="description">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img className="img-fluid" src="https://blush.design/api/download?shareUri=ztHovjl9cW3lnFqx&c=Skin_0%7Eca8f67-0.1%7Eff8282-0.2%7Eca8f67&w=800&h=800&fm=png" alt="" />
              </div>
              <div className="col-lg-6 pt-5">
                <div className="card bg-white border-0">
                  <div className="card-header">
                    <h1>
                      Apa itu <span className="text-primary">COVID-19?</span>
                    </h1>
                  </div>
                  <div className="card-body">
                    <p className="fs-6 fw-bold">
                      COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan Desember 2019.
                      COVID-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,218.7C480,224,600,192,720,165.3C840,139,960,117,1080,133.3C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <section id="prokes" className="bg-gray">
          <div className="container">
            <h1 className="text-center">
              PROTOKOL KESEHATAN <span className="fw-bold text-primary">3M</span>
              <hr className="my-4" />
            </h1>
            <div className="row text-center justify-content-center">
              <div className="col-lg-6 mb-3">
                <div className="card bg-transparent border-0">
                  <div className="card-body">
                    <img height="300" src="https://blush.design/api/download?shareUri=jvZ8GwXXZPyW1cuZ&c=Skin_0%7E757eff-0.11%7E757eff-0.12%7E09b9c6-0.13%7E09b9c6&w=800&h=800&fm=png" alt="Memakai Masker" />
                    <h4 className="fw-bold text-primary">Memakai Masker</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="card bg-transparent border-0">
                  <div className="card-body">
                    <img height="300" src="https://blush.design/api/download?shareUri=kW7If5nASA5q1hW2&c=Skin_0%7E09b9c6-0.1%7Eca8f67-0.2%7Eca8f67&w=800&h=800&fm=png" alt="Menjaga Jarak" />
                    <h4 className="fw-bold text-primary">Menjaga Jarak</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="card bg-transparent border-0">
                  <div className="card-body">
                    <img height="300" src="https://blush.design/api/download?shareUri=_I0GxrL32&c=Skin_0%7Eb17606&w=800&h=800&fm=png" alt="Mencuci Tangan" />
                    <h4 className="fw-bold text-primary">Mencuci Tangan</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray">
          <div className="container">
            <div className="jumbotron text-center text-light-gray">
              <h1 className="display-5 fw-bold">
                Global <span className="text-primary fw-bold">COVID-19</span> Cases
              </h1>
              <hr className="my-4" />
              <div className="row justify-content-center">
                <div className="col-lg-4 mt-4">
                  <div className="card text-danger fw-bold bg-glass">
                    <div className="card-header">
                      <h4>Kasus</h4>
                    </div>
                    <div className="card-body">{isLoading ? <Spinners /> : <p> {covids['Total Cases_text']} Orang </p>}</div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="card text-success fw-bold bg-glass">
                    <div className="card-header">
                      <h4 className="fw-bold">Sembuh</h4>
                    </div>
                    <div className="card-body">{isLoading ? <Spinners /> : <p> {covids['Total Recovered_text']} Orang </p>}</div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="card bg-glass fw-bold text-dark">
                    <div className="card-header">
                      <h4>Meninggal</h4>
                    </div>
                    <div className="card-body">{isLoading ? <Spinners /> : <p> {covids['Total Deaths_text']} Orang </p>}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,218.7C480,224,600,192,720,165.3C840,139,960,117,1080,133.3C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </React.Fragment>
    </div>
  );
}
