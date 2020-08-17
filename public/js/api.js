const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch('/api/workouts');
    } catch (err) {
      console.log(err);
    }

    const json = await res.json();
    if (json.length > 0)
    {
      const last = json[json.length - 1];
  
      last.totalDuration = last.exercises.reduce((total, el) => total + el.duration, 0);
  
      return last;
    }
    return null;
  },

  async addExercise(data) {
    let id = location.search.split('=')[1];

    const res = await fetch('/api/workouts/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  async createWorkout(data = {}) {
    const res = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  }
};