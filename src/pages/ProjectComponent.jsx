import React, {useEffect, useState} from 'react';
import axios from 'axios';
import covidIlus2 from '../asset/covid-ilustration.png';

function Spinner() {
  return (
    <div>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function ProjectComponent() {
  const [country, setCountry] = useState([]);
  const [nameCountry, setNameCountry] = useState('usa');
  const [input, setInput] = useState('usa');
  const [loading, setLoading] = useState(false);
  const options = {
    method: 'GET',
    url: `https://covid-19-tracking.p.rapidapi.com/v1/${nameCountry}`,
    headers: {
      'x-rapidapi-key': '2a83e41c31msh0b689309d2de4a6p1e5b7cjsn5a82ea23d8f6',
      'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setCountry(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    getCountry();
  }, [nameCountry]);

  function handleClick(e) {
    e.preventDefault();
    setNameCountry(input);
  }

  return (
    <div>
      <div className="container mb-5">
        <div className="row justify-content-center pt-4">
          <div className="col-lg-6">
            <img src={covidIlus2} className="img-fluid" alt="Covid Ilustration" />
          </div>
          <div className="col-lg-6 pt-5">
            <h1 className="text-primary fw-bold">Butuh Informasi Kasus COVID-19 Secara Global? </h1>
            <h1 className="text-white fw-bold">Kamu Bisa Temukan Disini!</h1>
            <a href="#cari" className="btn btn-primary btn-lg">
              Cari
            </a>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d8e3e7"
          fillOpacity="1"
          d="M0,224L60,192C120,160,240,96,360,64C480,32,600,32,720,58.7C840,85,960,139,1080,138.7C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-light-gray">
        <div id="cari" className="container p-5">
          <h1 className="text-primary fw-bold">Pencarian Data COVID-19 Berdasarkan Negara</h1>
          <hr />
          <div className="row">
            <div className="col-lg-3">
              <form onSubmit={handleClick}>
                <div className="input-group mb-3">
                  <input type="text" value={input} name="input" onChange={(e) => setInput(e.target.value)} className="form-control" placeholder="Search Country" aria-label="Search Country" aria-describedby="button-addon2" />
                  <button className="btn btn-primary" type="submit" id="button-addon2">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row  mt-3">
            <div className="col-lg-12">
              <div className="card bg-light-blue shadow text-center fw-bold">
                <div className="card-header">
                  <h3>Kasus Negara {country.Country_text}</h3>
                </div>
                <div className="card-body">
                  {
                    <div>
                      <div className="row justify-content-center">
                        <div className="col-lg-3 text-danger">
                          <h3 className="cases">Kasus</h3>
                          <p>{loading ? <Spinner /> : country['Total Cases_text']}</p>
                        </div>
                        <div className="col-lg-3 text-light">
                          <h3 className="cases">Kasus Baru</h3>
                          <p>{loading ? <Spinner /> : country['Active Cases_text']}</p>
                        </div>
                        <div className="col-lg-3 text-dark">
                          <h3 className="cases">Meninggal</h3>
                          <p>{loading ? <Spinner /> : country['Total Deaths_text']}</p>
                        </div>
                        <div className="col-lg-3 text-success">
                          <h3 className="cases"> Sembuh</h3>
                          <p>{loading ? <Spinner /> : country['Total Recovered_text']}</p>
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div className="card-footer">
                  <h4>Terakhir update</h4>
                  <p>{loading ? 'Loading...' : country['Last Update']}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d8e3e7"
          fillOpacity="1"
          d="M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,181.3C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default ProjectComponent;
