DFRobotMaqueenPlus.I2CInit()
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
                DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
            }
        }
    }
})
