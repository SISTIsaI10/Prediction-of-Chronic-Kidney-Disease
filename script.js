const submitbutton = document.getElementById('submitbutton');
submitbutton.addEventListener('click',async(e)=>{
    e.preventDefault()
    let values={
        age_data : document.getElementById('ageid').value,
        bp_data : document.getElementById('bpid').value,
        sg_data : document.getElementById('sgid').value,
        al_data : document.getElementById('alid').value,
        su_data : document.getElementById('suid').value,
        rbc_data : document.getElementById('rbcid').value,
        pc_data : document.getElementById('pcid').value,
        pcc_data : document.getElementById('pccid').value,
        ba_data : document.getElementById('baid').value,
        bgr_data : document.getElementById('bgrid').value,
        bu_data : document.getElementById('buid').value,
        sc_data : document.getElementById('scid').value,
        sod_data : document.getElementById('sodid').value,
        pot_data : document.getElementById('potid').value,
        hemo_data : document.getElementById('hemoid').value,
        pcv_data : document.getElementById('pcvid').value,
        wc_data : document.getElementById('wcid').value,
        rc_data : document.getElementById('rcid').value,
        htn_data : document.getElementById('htnid').value,
        dm_data : document.getElementById('dmid').value,
        cad_data : document.getElementById('cadid').value,
        appet_data : document.getElementById('appetid').value,
        pe_data : document.getElementById('peid').value,
        ane_data : document.getElementById('aneid').value} 
    //let values = [age_data, bp_data, sg_data, al_data, su_data, rbc_data, pc_data, pcc_data, ba_data, bgr_data, bu_data, sc_data, sod_data, pot_data, hemo_data, pcv_data, wc_data, rc_data, htn_data, dm_data, cad_data, appet_data, pe_data, ane_data]
    const formdata = new FormData();
    for (const key in values) {
        formdata.append(key, values[key]);
    }

    console.log(values)
    var a=0
    const resp = await fetch('http://localhost:5000/',{
        method:'POST',
        body: formdata
    }).then(res=>res.json())
    .then(data_res => {
        var a=data_res['data']
        console.log(a)
    if (a==1)
    {
        window.open ("failure.html",'_self');
    }
    else
    {
        window.open ("healthy.html",'_self');
    }
    })
    .catch(err=>console.log(err))
    
})