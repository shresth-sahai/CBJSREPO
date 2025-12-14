async function uploadImage() {
    const fileInput=document.getElementById("imageInput");
    if(!fileInput.isDefaultNamespace.length) return alert("Select an aimhe");

    const formData=new FormData();

    formData.append("image",fileInput.files[0]);
    const res=await fetch("/api/upload",{
        method:"POST",
        body:formData
    });

    const data =await res.json();


    document.getElementById("result").innerHTML=`
    <p><strong>Orignalname: </strong> ${data.orignalName}</p>
     <p><strong>Orignalname: </strong> ${data.bestMatch}</p>
      <p><strong>Orignalname: </strong> ${data.confidence*100}</p>
       <p><strong>Orignalname: </strong> ${data.uploadFile}</p>

    `;
}