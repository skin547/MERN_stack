const assert = require('assert').strict;
const mocha = require("mocha");
const urlValidator = require("../util/urlValidator");

describe( "Url format validation", () => {

    // Task-Oriented Functional Test
    let TOFT_cases = [
        "https://mochajs.org/",
        "https://mochajs.org/#dynamically-generating-tests",
        "https://roddick.pixnet.net/blog/post/23136052",
        "https://www.google.com/search?rlz=1C5CHFA_enTW922TW922&sxsrf=ALeKk01a2R5crnedMM2UB7J5ZsmHv7ecEw%3A1604588087876&ei=NxKkX-KRNZ6Ur7wPoc-vwAU&q=java+Minimum+Cost+to+Move+Chips+to+The+Same+Position&oq=java+Minimum+Cost+to+Move+Chips+to+The+Same+Position&gs_lcp=CgZwc3ktYWIQAzoECCMQJ1CWHFj2K2DzLGgBcAB4AIABYogBuQSSAQE3mAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwiiifS31OvsAhUeyosBHaHnC1gQ4dUDCA0&uact=5",
        "https://tw.yahoo.com/?guccounter=1",
        "http://example.com",
        "http://localhost", // bug
        "http://127.0.0.1:3000" // bug
    ]

    TOFT_cases.forEach( (test_case) => {
        it('should return true when input is a valid http url', () => {
            assert.deepStrictEqual( urlValidator.validate( test_case ), true );
        })
    })

    // Force Error Test
    let FET_cases = [
        "https//mochajs.org",
        "https:mochajs.org",
        "htt://mochajs.org/#dynamically-generating-tests",
        "ftp://roddick.pixnet.net/blog/post/23136052",
        "https://w",
        "https://yahoo.c"
    ]

    FET_cases.forEach( (test_case) => {
        it('should return false when input is not a valid http url', () => {
            assert.deepStrictEqual( urlValidator.validate( test_case ), false );
        })
    })
})