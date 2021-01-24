const fetchdata=()=> {
    fetch("src\\js\\MOCK_DATA _10row.json")
    .then((Response) => {
        if (!Response.ok) {
          throw Error("ERROR");
        }
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        
      });
}
fetchdata();