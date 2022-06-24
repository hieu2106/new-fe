function createRow(rowData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.matn}</td>
          <td>${rowData.tentn}</td>
          <td>${rowData.tinhtrang}</td>
          <td>${rowData.slco}</td>

          <td><a href="form-edittn.html?id=${rowData.id}"><button class="btn btn-info btn-icon-anim btn-square" onclick="updateTNById(${rowData.id});"><i class="fa fa-pencil-square-o"></i></button></a></td>
          <td><button class="btn btn-info btn-icon-anim btn-square" onclick="delTN(${rowData.id})"><i class="icon-trash"></i></button></td>
      </tr>
    `;
    return row;
  }
  
  (async function () {
    const foodTable = document.querySelector("#foods_table tbody");
    // const URL = "http://localhost:3000/food";
    const foods = await getAllTN();
    if (foods.length) {
      for (const food of foods) {
        foodTable.appendChild(createRow(food));
      }
    }
  })();
  
  function delTN(id){
    if (confirm("Do you want Delete?")) {
      deleteTN(id);
      window.location.reload();
    }
  }