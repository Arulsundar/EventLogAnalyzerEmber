import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        page: {
          refreshModel: true
        }
      },
    model(params) {
        return fetch('http://localhost:8080/Test/logs?pg='+this.controllerFor('dash').get('page'), { 
             
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(params);
                console.log(this.controllerFor('dash').get('page'));
                console.log(data);
                if(data.response_message=="No Data")
                   alert("NO DATA");
                else
                   return data;
            });
    }
});
