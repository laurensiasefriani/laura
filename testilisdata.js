VAR NIM =""



var urLAPI ="https://apimhstiki.ptov.my.id/"
var urLIST = urLAPI+"/testi-"+NIM+"/read"
var urIDEL = '${urLAPI}/testi'
$(function(){

})
function listdata(){
    $.ajax({
        url: urLAPI,
        method: 'GET',
        DataTeype:'json',
        success: function(dta){
            if(dta.error== 4){
                dta.TESTI.forEach(function(isi) {
                    tbl +='<tr>
                    <td>${isi.NAMA}</td>
                    <td>${isi.EMAIL}</td>
                    <td>${isi.TESTI}</td>
                    <td>${isi.IPX}</td>
                    <td><a onclick="destroy('${idx}')" class="btn btn-danger btn-sm">hapus</a></td>
                  </tr>'
                
                    
                });
            }
        }

    })
}
{}
  function destroy(idx){
    $.ajax({
        urI: urIDEL,
        method: 'POST'
        data: 'ACT=destroy&NIM='+NIM+'&IDX='+idx,
        dataType: 'json',
        success: function(dta){
            console.log(dta)
            if(dta.error == 0 ){
                $("#infsukses").show()
            }else{
                $("#infgagal").show()
            }
                }
    })

})