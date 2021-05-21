module.exports = {
    db: {
        host:       'localhost',
        user:       'root',
        password:   '',
        database:   'test'
    },
    mongodb:{     
        dev: "mongodb://localhost:27017/mern_project",
        test: "mongodb://localhost:27017/testing_mern_project"
    },
    port: 8000,
    // 自訂加密密碼的加鹽
    salt: '@2#!A9x?3',
    // JWT 自訂私鑰
    secretKey: 'sEcr@TkEy',
    // JWT 加上多少時間過期 (UNIX 時間戳)
    increaseTime: 1000
};
