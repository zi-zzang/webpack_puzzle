const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    "mode": "development", // production과의 차이 : 번들링의 차이, production은 번들링이 오래걸림
    // 개발모드로 개발하겠다는 뜻
    "entry": {
        "app":["./src/index"]
    },
    "output": {
        "filename": "bundle.js",
        "path": __dirname + "/public"
    },
    "module":{
        //webpack에서 설정할 전처리 부분
        "rules":[
            {
                "test": /\.js$/, //js로 끝나는 모든 파일
                "loader": "babel-loader"
            },
            {
                "test": /\.(png|jpg|gif)?$/,
                "loader": 'url-loader',
                "options": {
                    "name": '[hash].[ext]',
                    "limit": 10000,
                }
            },
        ]
    },
    "plugins":[
        new HtmlWebpackPlugin({
            "template": './public/index.html'
        })
    ],
    "devServer":{
        "static":{
            "directory":__dirname + "/public"
            //외부에서 경로접근이 가능한 폴더를 public으로 지정하겠다
        },
        "port":3001
    },
}

module.exports = config;
//node.js에서 사용하는 export 방법