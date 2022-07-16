class studentHogwarts {

    constructor() {
        this.privateScore= 0;
        this._name = null;
      }

    #changeScoreBy(points) {
        this.privateScore += points;
    }

    setName(newName) {
        this._name = newName;
    }

    rewardStudent() {
        this.#changeScoreBy(1);
    }

    penalizeStudent() {
        this.#changeScoreBy(-1);
    }

    getScore() {
        return `${this._name}: ${this.privateScore}`;
    }
}

    let harry = new studentHogwarts();
    harry.rewardStudent();
    harry.rewardStudent();
    harry.rewardStudent();
    harry.rewardStudent();
    harry.setName("Harry");
    console.log(harry.getScore());

    let draco = new studentHogwarts();
    draco.rewardStudent();
    draco.penalizeStudent();
    draco.penalizeStudent();
    draco.penalizeStudent();
    draco.setName("Draco");
    console.log(draco.getScore());
