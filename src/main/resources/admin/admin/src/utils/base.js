const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshengkaoqin/",
            name: "daxueshengkaoqin",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshengkaoqin/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生考勤系统"
        } 
    }
}
export default base
