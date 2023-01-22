class AbstractCamera {
    constructor() {
        if (this.constructor === AbstractCamera) {
            throw new Error("Abstract class cannot be instantiated");
        }
    }
    init_camera() {
    }
    takePicture() {
    }
    start_stream() {
    }
}


class Lumix_GX80 extends AbstractCamera {
    constructor(ip) {
        super();
        console.log("Lumix GX80 created");
        this.ip = ip;
        this.baseurl = "http://" + ip + "/cam.cgi";
        this.init_camera();
    }
    init_camera() {
        this.make_request({mode: "camcmd", value: "recmode"});
    }
    takePicture() {
        this.make_request({mode: "camcmd", value: "capture"});
    }
    start_stream() {
        make_request({mode: "startstream", value: "12345"});
        make_request({mode: "setsetting", type: "liveviewsize", value: "qvga"});
        make_request({mode: "camcmd", value: "recmode"});
    }
    get_stream_image() {
        image = new Image();
    }

    make_request(params) {
        var url = this.baseurl + "?";
        for (var key in params) {
            url += key + "=" + params[key] + "&";
        }
        url = url.slice(0, -1);
        console.log(url);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.send();
    }
}

export default Lumix_GX80;
