import React, { Component } from "react";
import { IdCard } from "./IdCard";
import { Greetings } from "./Greetings";
import { Random } from "./Random";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {
          <section className="id-card">
            <IdCard
              firstName="John"
              lastName="Doe"
              gender="Male"
              height="178"
              birth="Tue 1992-07-14"
              img="https://randomuser.me/api/portraits/men/44.jpg"
            />
            <IdCard
              firstName="Obrien"
              lastName="Delores"
              gender="Female"
              height="172"
              birth="Tue 1988-05-11"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </section>
        }

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random No</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
    );
  }
}

export default App;
