const BASE_URL = 'http://localhost:3001';

export function fetchDogs() {
    return fetch(`${BASE_URL}/dogs`)
        .then(resp => resp.json())
        .catch(e => {
            throw Error(e);
        });
}

export function fetchAllGrades() {
    return fetch(`${BASE_URL}/grades`)
        .then(resp => resp.json())
        .catch(e => {
            throw Error(e);
        });
}

export function fetchOneDog(id) {
    return fetch(`${BASE_URL}/${id}`)
        .then(resp => resp.json())
        .catch((e) => {
            throw Error(e);
        });
}

export function updateDoggy(dogs) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(dogs),
        headers: {
          'Content-Type': 'application/json'
        }
      };
    return fetch(`${BASE_URL}/dogs/${dogs.id}`, opts)
    .then(resp => resp.json())
    .catch((e) => {
        throw Error(e);
    });
}

export function updateGrades(dog) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(dog),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return fetch(`${BASE_URL}/grades/${dog.id}`, opts)
        .then(resp => resp.json())
        .catch((e) => {
            throw Error(e);
        });
}

export function saveNewDog(dog) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(dog),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/dogs`, opts)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

export function deleteDog(dog) {
    const opts = {
        method: 'Delete',
    }

    return fetch(`${BASE_URL}/dogs/${dog.id}`, opts)
    .catch ((e) => {
        throw Error(e);
    });
}
