function updb2(done){
    setTimeout(() => {
        done();
    },3000);
}
updb2(function () {
    //數據庫更新完畢    
    console.log("updb2 success.");
});
console.log("i like nodejs.");