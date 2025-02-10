let data = [];
// main.innerHTML ="bagus H";
const btn = document.getElementById("cekSertifikat");
const user = document.getElementById("user");
const juara = document.getElementById("juara");

window.onload=async function (){
    await readCSV("./src/data/data.csv").then(resp=>{
        data = resp;
    });
    btn.onclick = function(){
        const userv = user.value;
        const juarav = juara.value;
        if(userv.length==0){
            return alert("user tidak boleh kosong"); 
        }
        if(juarav.length==0){
            return alert("user tidak boleh kosong"); 
        }
        
        const dfilter= data.filter(v=>
            (
                v[1].split(" ").filter(v1=>String(v1).toLowerCase()==String(userv).toLowerCase()).length==1
                || String(v[1]).toLowerCase() == String(userv).toLowerCase()
            )
            && v[2].substring(0,1)==juarav
        );
        if(dfilter.length==0){
            // untuk load peserta 
        }else{
            const result = dfilter[0];
            rediracToFile(String(result[1]).replace(" ","_")+".pdf")
        }    
    }
}

function rediracToFile(files){ 
    window.open(window.location.href+"/../src/file/"+files, "_blank");
}