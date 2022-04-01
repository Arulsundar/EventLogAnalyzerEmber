import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return fetch('http://localhost:8080/Test/list', {   
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                return data;
            });
    }
});