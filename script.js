jQuery(document).ready(function($){
    $("#samt_5").on("click", function(){
        let averageMonthlyUnitConsumption=Number($("#samt_4").val());
        let tarrifValue =$("#tariffType").val();

const nf=Intl.NumberFormat('en-US',{
  minimumFractionDigits:0,
  maximumFractionDigits:0

});
const nff=Intl.NumberFormat('en-US',{
    minimumFractionDigits:0,
    maximumFractionDigits:1
  
  });
        if(tarrifValue==1){
            var residential=23;
            var averageYearlyBillForResidential=(averageMonthlyUnitConsumption*residential)
            var averageYearlyBill=nf.format(averageYearlyBillForResidential)
            $("#samt_6").text("₹"+ averageYearlyBill);
        }
        else if(tarrifValue==2){
            var commertial=28;
            var averageYearlyBillForCommertial=(averageMonthlyUnitConsumption*commertial);
            var averageYearlyBill=nf.format(averageMonthlyUnitConsumption*commertial);
            $("#samt_6").text("₹"+averageYearlyBill);
        }
        else if(tarrifValue==0){
            alert("Please enter the Tariff type and Average Yearly Unit  to perform the calculation.").replace(',', '');
            return;
        }
        else{
            var industrial=22;
            var averageYearlyBillForIndustrial=(averageMonthlyUnitConsumption*industrial);
            var averageYearlyBill=nf.format(averageMonthlyUnitConsumption*industrial);
            $("#samt_6").text("₹"+averageYearlyBill);
        }

        if(averageMonthlyUnitConsumption==""){
            alert("Please enter the Tariff type and Average Yearly Unit  to perform the calculation.").replace(',', '');
            return;
        }

        let kwSystem=(averageMonthlyUnitConsumption/(12*30*4));
        let kwSystemRecommended=nff.format(kwSystem);
        $("#samt_7").text(kwSystemRecommended);


        let netSystem=(kwSystem*1000*90);
        let netSystemCost=nf.format(netSystem);
        $("#samt_8").text("₹"+netSystemCost);


        let sizeRequire=(kwSystem*1000*0.1);
        let sizeRequireInSq=nf.format(sizeRequire).replace(',', '');
        $("#samt_9").text(sizeRequireInSq);

        let estimatedGeneration=parseInt(kwSystem*4*30*12);
        let estimatedGenerationAnnually=nf.format(estimatedGeneration).replace(',', '');
        $("#samt_10").text(estimatedGenerationAnnually);

        let contribution=(estimatedGeneration*0.0313);
        let contributionToEnvironment=nf.format(contribution);
        $("#samt_11").html(contributionToEnvironment+"<h5>Trees Added</h5>");


        // Table Part From Here//

        // For Year One//

        var billWithSolarForYearOne=5000;
        var billWithSolar=nf.format(billWithSolarForYearOne);
        $("#td_3").text(billWithSolar);

        if(tarrifValue==1){

            var billWithoutSolarForYearOne=(averageYearlyBillForResidential);
            var billWithoutSolar_one=nf.format(billWithoutSolarForYearOne);
            $("#td_2").text(billWithoutSolar_one);
        }

        else if(tarrifValue==2){

            var billWithoutSolarForYearOne=(averageYearlyBillForCommertial);
            var billWithoutSolar_two=nf.format(billWithoutSolarForYearOne);
            $("#td_2").text(billWithoutSolar_two);
        }
        else{
            var billWithoutSolarForYearOne=(averageYearlyBillForIndustrial);
            var billWithoutSolar_three=nf.format(billWithoutSolarForYearOne);
            $("#td_2").text(billWithoutSolar_three);
        }

        let netCashFlowForYearOne=(billWithoutSolarForYearOne-netSystem);
        let netCashFlow=nf.format(netCashFlowForYearOne);
        $("#td_1").text(netCashFlow);

        // For Year Two//

        var billWithSolarForYearTwo=((billWithSolarForYearOne*3/100)+billWithSolarForYearOne);
        var billWithSolarForYearNf=nf.format(billWithSolarForYearTwo);
        $("#td_6").text(billWithSolarForYearNf);

        var billWithoutSolarForYearTwo=((billWithoutSolarForYearOne*3/100)+billWithoutSolarForYearOne);
        var billWithoutSolarForYearTwoNf=nf.format(billWithoutSolarForYearTwo);
        $("#td_5").text(billWithoutSolarForYearTwoNf);

        var netCashFlowForYearTwo=(netCashFlowForYearOne+billWithoutSolarForYearOne);
        var netCashFlowForYearTwoNf=nf.format(netCashFlowForYearTwo);
        $("#td_4").text(netCashFlowForYearTwoNf);

        // For Year Three//

        var billWithSolarForYearThree=((billWithSolarForYearTwo*3/100)+billWithSolarForYearTwo);
        var billWithSolarForYearThreeNf=nf.format(billWithSolarForYearThree);
        $("#td_9").text(billWithSolarForYearThreeNf);

        var billWithoutSolarForYearThree=((billWithoutSolarForYearTwo*3/100)+billWithoutSolarForYearTwo);
        var billWithoutSolarForYearThreeNf=nf.format(billWithoutSolarForYearThree);
        $("#td_8").text(billWithoutSolarForYearThreeNf);

        var netCashFlowForYearThree=(netCashFlowForYearTwo+billWithoutSolarForYearTwo);
        var netCashFlowForYearThreeNf=nf.format(netCashFlowForYearThree);
        $("#td_7").text(netCashFlowForYearThreeNf);

        // For Year Four//

        var billWithSolarForYearFour=((billWithSolarForYearThree*3/100)+billWithSolarForYearThree);
        var billWithSolarForYearFourNf=nf.format(billWithSolarForYearFour);
        $("#td_12").text(billWithSolarForYearFourNf);

        var billWithoutSolarForYearFour=((billWithoutSolarForYearThree*3/100)+billWithoutSolarForYearThree);
        var billWithoutSolarForYearFourNf=nf.format(billWithoutSolarForYearFour);
        $("#td_11").text(billWithoutSolarForYearFourNf);

        var netCashFlowForYearFour=(netCashFlowForYearThree+billWithoutSolarForYearThree);
        var netCashFlowForYearFourNf=nf.format(netCashFlowForYearFour);
        $("#td_10").text(netCashFlowForYearFourNf);

        // For Year Five//

        var billWithSolarForYearFive=((billWithSolarForYearFour*3/100)+billWithSolarForYearFour);
        var billWithSolarForYearFiveNf=nf.format(billWithSolarForYearFive);
        $("#td_15").text(billWithSolarForYearFiveNf);

        var billWithoutSolarForYearFive=((billWithoutSolarForYearFour*3/100)+billWithoutSolarForYearFour);
        var billWithoutSolarForYearFiveNf=nf.format(billWithoutSolarForYearFive);
        $("#td_14").text(billWithoutSolarForYearFiveNf);

        var netCashFlowForYearFive=(netCashFlowForYearFour+billWithoutSolarForYearFour);
        var netCashFlowForYearFiveNf=nf.format(netCashFlowForYearFive);
        $("#td_13").text(netCashFlowForYearFiveNf);

        // For Year Six//

        var billWithSolarForYearSix=((billWithSolarForYearFive*3/100)+billWithSolarForYearFive);
        var billWithSolarForYearSixNf=nf.format(billWithSolarForYearSix);
        $("#td_18").text(billWithSolarForYearSixNf);

        var billWithoutSolarForYearSix=((billWithoutSolarForYearFive*3/100)+billWithoutSolarForYearFive);
        var billWithoutSolarForYearSixNf=nf.format(billWithoutSolarForYearSix);
        $("#td_17").text(billWithoutSolarForYearSixNf);

        var netCashFlowForYearSix=(netCashFlowForYearFive+billWithoutSolarForYearFive);
        var netCashFlowForYearSixNf=nf.format(netCashFlowForYearSix);
        $("#td_16").text(netCashFlowForYearSixNf);

        // For Year Seven//

        var billWithSolarForYearSeven=((billWithSolarForYearSix*3/100)+billWithSolarForYearSix);
        var billWithSolarForYearSevenNf=nf.format(billWithSolarForYearSeven);
        $("#td_21").text(billWithSolarForYearSevenNf);

        var billWithoutSolarForYearSeven=((billWithoutSolarForYearSix*3/100)+billWithoutSolarForYearSix);
        var billWithoutSolarForYearSevenNf=nf.format(billWithoutSolarForYearSeven);
        $("#td_20").text(billWithoutSolarForYearSevenNf);

        var netCashFlowForYearSeven=(netCashFlowForYearSix+billWithoutSolarForYearSix);
        var netCashFlowForYearSevenNf=nf.format(netCashFlowForYearSeven);
        $("#td_19").text(netCashFlowForYearSevenNf);


        // For Year Eight//

        var billWithSolarForYearEight=((billWithSolarForYearSeven*3/100)+billWithSolarForYearSeven);
        var billWithSolarForYearEightNf=nf.format(billWithSolarForYearEight);
        $("#td_24").text(billWithSolarForYearEightNf);

        var billWithoutSolarForYearEight=((billWithoutSolarForYearSeven*3/100)+billWithoutSolarForYearSeven);
        var billWithoutSolarForYearEightNf=nf.format(billWithoutSolarForYearEight);
        $("#td_23").text(billWithoutSolarForYearEightNf);

        var netCashFlowForYearEight=(netCashFlowForYearSeven+billWithoutSolarForYearSeven);
        var netCashFlowForYearEightNf=nf.format(netCashFlowForYearEight);
        $("#td_22").text(netCashFlowForYearEightNf);

        // For Year Nine//

        var billWithSolarForYearNine=((billWithSolarForYearEight*3/100)+billWithSolarForYearEight);
        var billWithSolarForYearNineNf=nf.format(billWithSolarForYearNine);
        $("#td_27").text(billWithSolarForYearNineNf);

        var billWithoutSolarForYearNine=((billWithoutSolarForYearEight*3/100)+billWithoutSolarForYearEight);
        var billWithoutSolarForYearNineNf=nf.format(billWithoutSolarForYearNine);
        $("#td_26").text(billWithoutSolarForYearNineNf);

        var netCashFlowForYearNine=(netCashFlowForYearEight+billWithoutSolarForYearEight);
        var netCashFlowForYearNineNf=nf.format(netCashFlowForYearNine);
        $("#td_25").text(netCashFlowForYearNineNf);

        // For Year Ten//

        var billWithSolarForYearTen=((billWithSolarForYearNine*3/100)+billWithSolarForYearNine);
        var billWithSolarForYearTenNf=nf.format(billWithSolarForYearTen);
        $("#td_30").text(billWithSolarForYearTenNf);

        var billWithoutSolarForYearTen=((billWithoutSolarForYearNine*3/100)+billWithoutSolarForYearNine);
        var billWithoutSolarForYearTenNf=nf.format(billWithoutSolarForYearTen);
        $("#td_29").text(billWithoutSolarForYearTenNf);

        var netCashFlowForYearTen=(netCashFlowForYearNine+billWithoutSolarForYearNine);
        var netCashFlowForYearTenNf=nf.format(netCashFlowForYearTen);
        $("#td_28").text(netCashFlowForYearTenNf);

        // For Year Eleven//

        var billWithSolarForYearEleven=((billWithSolarForYearTen*3/100)+billWithSolarForYearTen);
        var billWithSolarForYearElevenNf=nf.format(billWithSolarForYearEleven);
        $("#td_33").text(billWithSolarForYearElevenNf);

        var billWithoutSolarForYearEleven=((billWithoutSolarForYearTen*3/100)+billWithoutSolarForYearTen);
        var billWithoutSolarForYearElevenNf=nf.format(billWithoutSolarForYearEleven);
        $("#td_32").text(billWithoutSolarForYearElevenNf);

        var netCashFlowForYearEleven=(netCashFlowForYearTen+billWithoutSolarForYearTen);
        var netCashFlowForYearElevenNf=nf.format(netCashFlowForYearEleven);
        $("#td_31").text(netCashFlowForYearElevenNf);

        // For Year Twelev//

        var billWithSolarForYearTwelev=((billWithSolarForYearEleven*3/100)+billWithSolarForYearEleven);
        var billWithSolarForYearTwelevNf=nf.format(billWithSolarForYearTwelev);
        $("#td_36").text(billWithSolarForYearTwelevNf);

        var billWithoutSolarForYearTwelev=((billWithoutSolarForYearEleven*3/100)+billWithoutSolarForYearEleven);
        var billWithoutSolarForYearTwelevNf=nf.format(billWithoutSolarForYearTwelev);
        $("#td_35").text(billWithoutSolarForYearTwelevNf);

        var netCashFlowForYearTwelev=(netCashFlowForYearEleven+billWithoutSolarForYearEleven);
        var netCashFlowForYearTwelevNf=nf.format(netCashFlowForYearTwelev);
        $("#td_34").text(netCashFlowForYearTwelevNf);

        // For Year Thirteen//
        var billWithSolarForYearThirteen=((billWithSolarForYearTwelev*3/100)+billWithSolarForYearTwelev);
        var billWithSolarForYearThirteenNf=nf.format(billWithSolarForYearThirteen);
        $("#td_39").text(billWithSolarForYearThirteenNf);

        var billWithoutSolarForYearThirteen=((billWithoutSolarForYearTwelev*3/100)+billWithoutSolarForYearTwelev);
        var billWithoutSolarForYearThirteenNf=nf.format(billWithoutSolarForYearThirteen);
        $("#td_38").text(billWithoutSolarForYearThirteenNf);

        var netCashFlowForYearThirteen=(netCashFlowForYearTwelev+billWithoutSolarForYearTwelev);
        var netCashFlowForYearThirteenNf=nf.format(netCashFlowForYearThirteen);
        $("#td_37").text(netCashFlowForYearThirteenNf);

        // For Year Fourteen//
        var billWithSolarForYearFourteen=((billWithSolarForYearThirteen*3/100)+billWithSolarForYearThirteen);
        var billWithSolarForYearFourteenNf=nf.format(billWithSolarForYearFourteen);
        $("#td_42").text(billWithSolarForYearFourteenNf);

        var billWithoutSolarForYearFourteen=((billWithoutSolarForYearThirteen*3/100)+billWithoutSolarForYearThirteen);
        var billWithoutSolarForYearFourteenNf=nf.format(billWithoutSolarForYearFourteen);
        $("#td_41").text(billWithoutSolarForYearFourteenNf);

        var netCashFlowForYearFourteen=(netCashFlowForYearThirteen+billWithoutSolarForYearThirteen);
        var netCashFlowForYearFourteenNf=nf.format(netCashFlowForYearFourteen);
        $("#td_40").text(netCashFlowForYearFourteenNf);

        // For Year Fifteen//
        var billWithSolarForYearFifteen=((billWithSolarForYearFourteen*3/100)+billWithSolarForYearFourteen);
        var billWithSolarForYearFifteenNf=nf.format(billWithSolarForYearFifteen);
        $("#td_45").text(billWithSolarForYearFifteenNf);

        var billWithoutSolarForYearFifteen=((billWithoutSolarForYearFourteen*3/100)+billWithoutSolarForYearFourteen);
        var billWithoutSolarForYearFifteenNf=nf.format(billWithoutSolarForYearFifteen);
        $("#td_44").text(billWithoutSolarForYearFifteenNf);

        var netCashFlowForYearFifteen=(netCashFlowForYearFourteen+billWithoutSolarForYearFourteen);
        var netCashFlowForYearFifteenNf=nf.format(netCashFlowForYearFifteen);
        $("#td_43").text(netCashFlowForYearFifteenNf);

        // For Year Sixteen//
        var billWithSolarForYearSixteen=((billWithSolarForYearFifteen*3/100)+billWithSolarForYearFifteen);
        var billWithSolarForYearSixteenNf=nf.format(billWithSolarForYearSixteen);
        $("#td_48").text(billWithSolarForYearSixteenNf);

        var billWithoutSolarForYearSixteen=((billWithoutSolarForYearFifteen*3/100)+billWithoutSolarForYearFifteen);
        var billWithoutSolarForYearSixteenNf=nf.format(billWithoutSolarForYearSixteen);
        $("#td_47").text(billWithoutSolarForYearSixteenNf);

        var netCashFlowForYearSixteen=(netCashFlowForYearFifteen+billWithoutSolarForYearFifteen);
        var netCashFlowForYearSixteenNf=nf.format(netCashFlowForYearSixteen);
        $("#td_46").text(netCashFlowForYearSixteenNf);

        // For Year Seventeen//
        var billWithSolarForYearSeventeen=((billWithSolarForYearSixteen*3/100)+billWithSolarForYearSixteen);
        var billWithSolarForYearSeventeenNf=nf.format(billWithSolarForYearSeventeen);
        $("#td_51").text(billWithSolarForYearSeventeenNf);

        var billWithoutSolarForYearSeventeen=((billWithoutSolarForYearSixteen*3/100)+billWithoutSolarForYearSixteen);
        var billWithoutSolarForYearSeventeenNf=nf.format(billWithoutSolarForYearSeventeen);
        $("#td_50").text(billWithoutSolarForYearSeventeenNf);

        var netCashFlowForYearSeventeen=(netCashFlowForYearSixteen+billWithoutSolarForYearSixteen);
        var netCashFlowForYearSeventeenNf=nf.format(netCashFlowForYearSeventeen);
        $("#td_49").text(netCashFlowForYearSeventeenNf);

        // For Year Eighteen//
        var billWithSolarForYearEighteen=((billWithSolarForYearSeventeen*3/100)+billWithSolarForYearSeventeen);
        var billWithSolarForYearEighteenNf=nf.format(billWithSolarForYearEighteen);
        $("#td_54").text(billWithSolarForYearEighteenNf);

        var billWithoutSolarForYearEighteen=((billWithoutSolarForYearSeventeen*3/100)+billWithoutSolarForYearSeventeen);
        var billWithoutSolarForYearEighteenNf=nf.format(billWithoutSolarForYearEighteen);
        $("#td_53").text(billWithoutSolarForYearEighteenNf);

        var netCashFlowForYearEighteen=(netCashFlowForYearSeventeen+billWithoutSolarForYearSeventeen);
        var netCashFlowForYearEighteenNf=nf.format(netCashFlowForYearEighteen);
        $("#td_52").text(netCashFlowForYearEighteenNf);

        // For Year Nineteen//
        var billWithSolarForYearNineteen=((billWithSolarForYearEighteen*3/100)+billWithSolarForYearEighteen);
        var billWithSolarForYearNineteenNf=nf.format(billWithSolarForYearNineteen);
        $("#td_57").text(billWithSolarForYearNineteenNf);

        var billWithoutSolarForYearNineteen=((billWithoutSolarForYearEighteen*3/100)+billWithoutSolarForYearEighteen);
        var billWithoutSolarForYearNineteenNf=nf.format(billWithoutSolarForYearNineteen);
        $("#td_56").text(billWithoutSolarForYearNineteenNf);

        var netCashFlowForYearNineteen=(netCashFlowForYearEighteen+billWithoutSolarForYearEighteen);
        var netCashFlowForYearNineteenNf=nf.format(netCashFlowForYearNineteen);
        $("#td_55").text(netCashFlowForYearNineteenNf);

        //For Year Twenty//
        var billWithSolarForYearTwenty=((billWithSolarForYearNineteen*3/100)+billWithSolarForYearNineteen);
        var billWithSolarForYearTwentyNf=nf.format(billWithSolarForYearTwenty);
        $("#td_60").text(billWithSolarForYearTwentyNf);

        var billWithoutSolarForYearTwenty=((billWithoutSolarForYearNineteen*3/100)+billWithoutSolarForYearNineteen);
        var billWithoutSolarForYearTwentyNf=nf.format(billWithoutSolarForYearTwenty);
        $("#td_59").text(billWithoutSolarForYearTwentyNf);

        var netCashFlowForYearTwenty=(netCashFlowForYearNineteen+billWithoutSolarForYearNineteen);
        var netCashFlowForYearTwentyNf=nf.format(netCashFlowForYearTwenty);
        $("#td_58").text(netCashFlowForYearTwentyNf);

        //For Year TwentyOne//
        var billWithSolarForYearTwentyOne=((billWithSolarForYearTwenty*3/100)+billWithSolarForYearTwenty);
        var billWithSolarForYearTwentyOneNf=nf.format(billWithSolarForYearTwentyOne);
        $("#td_63").text(billWithSolarForYearTwentyOneNf);

        var billWithoutSolarForYearTwentyOne=((billWithoutSolarForYearTwenty*3/100)+billWithoutSolarForYearTwenty);
        var billWithoutSolarForYearTwentyOneNf=nf.format(billWithoutSolarForYearTwentyOne);
        $("#td_62").text(billWithoutSolarForYearTwentyOneNf);

        var netCashFlowForYearTwentyOne=(netCashFlowForYearTwenty+billWithoutSolarForYearTwenty);
        var netCashFlowForYearTwentyOneNf=nf.format(netCashFlowForYearTwentyOne);
        $("#td_61").text(netCashFlowForYearTwentyOneNf);
        //For Year TwentyTwo//

        var billWithSolarForYearTwentyTwo=((billWithSolarForYearTwentyOne*3/100)+billWithSolarForYearTwentyOne);
        var billWithSolarForYearTwentyTwoNf=nf.format(billWithSolarForYearTwentyTwo);
        $("#td_66").text(billWithSolarForYearTwentyTwoNf);

        var billWithoutSolarForYearTwentyTwo=((billWithoutSolarForYearTwentyOne*3/100)+billWithoutSolarForYearTwentyOne);
        var billWithoutSolarForYearTwentyTwoNf=nf.format(billWithoutSolarForYearTwentyTwo);
        $("#td_65").text(billWithoutSolarForYearTwentyTwoNf);

        var netCashFlowForYearTwentyTwo=(netCashFlowForYearTwentyOne+billWithoutSolarForYearTwentyOne);
        var netCashFlowForYearTwentyTwoNf=nf.format(netCashFlowForYearTwentyTwo);
        $("#td_64").text(netCashFlowForYearTwentyTwoNf);

        //For Year TwentyThree//
        var billWithSolarForYearTwentyThree=((billWithSolarForYearTwentyTwo*3/100)+billWithSolarForYearTwentyTwo);
        var billWithSolarForYearTwentyThreeNf=nf.format(billWithSolarForYearTwentyThree);
        $("#td_69").text(billWithSolarForYearTwentyThreeNf);

        var billWithoutSolarForYearTwentyThree=((billWithoutSolarForYearTwentyTwo*3/100)+billWithoutSolarForYearTwentyTwo);
        var billWithoutSolarForYearTwentyThreeNf=nf.format(billWithoutSolarForYearTwentyThree);
        $("#td_68").text(billWithoutSolarForYearTwentyThreeNf);

        var netCashFlowForYearTwentyThree=(netCashFlowForYearTwentyTwo+billWithoutSolarForYearTwentyTwo);
        var netCashFlowForYearTwentyThreeNf=nf.format(netCashFlowForYearTwentyThree);
        $("#td_67").text(netCashFlowForYearTwentyThreeNf);

        //For Year TwentyFour//
        var billWithSolarForYearTwentyFour=((billWithSolarForYearTwentyThree*3/100)+billWithSolarForYearTwentyThree);
        var billWithSolarForYearTwentyFourNf=nf.format(billWithSolarForYearTwentyFour);
        $("#td_72").text(billWithSolarForYearTwentyFourNf);

        var billWithoutSolarForYearTwentyFour=((billWithoutSolarForYearTwentyThree*3/100)+billWithoutSolarForYearTwentyThree);
        var billWithoutSolarForYearTwentyFourNf=nf.format(billWithoutSolarForYearTwentyFour);
        $("#td_71").text(billWithoutSolarForYearTwentyFourNf);

        var netCashFlowForYearTwentyFour=(netCashFlowForYearTwentyThree+billWithoutSolarForYearTwentyThree);
        var netCashFlowForYearTwentyFourNf=nf.format(netCashFlowForYearTwentyFour);
        $("#td_70").text(netCashFlowForYearTwentyFourNf);

         //For Year TwentyFive//
         var billWithSolarForYearTwentyFive=((billWithSolarForYearTwentyFour*3/100)+billWithSolarForYearTwentyFour);
         var billWithSolarForYearTwentyFiveNf=nf.format(billWithSolarForYearTwentyFive);
         $("#td_75").text(billWithSolarForYearTwentyFiveNf);
 
         var billWithoutSolarForYearTwentyFive=((billWithoutSolarForYearTwentyFour*3/100)+billWithoutSolarForYearTwentyFour);
         var billWithoutSolarForYearTwentyFiveNf=nf.format(billWithoutSolarForYearTwentyFive);
         $("#td_74").text(billWithoutSolarForYearTwentyFiveNf);
 
         var netCashFlowForYearTwentyFive=(netCashFlowForYearTwentyFour+billWithoutSolarForYearTwentyFour);
         var netCashFlowForYearTwentyFiveNf=nf.format(netCashFlowForYearTwentyFive);
         $("#td_73").text(netCashFlowForYearTwentyFiveNf);

          //For Year TwentySix//
          var billWithSolarForYearTwentySix=((billWithSolarForYearTwentyFive*3/100)+billWithSolarForYearTwentyFive);
          var billWithSolarForYearTwentySixNf=nf.format(billWithSolarForYearTwentySix);
          $("#td_78").text(billWithSolarForYearTwentySixNf);
  
          var billWithoutSolarForYearTwentySix=((billWithoutSolarForYearTwentyFive*3/100)+billWithoutSolarForYearTwentyFive);
          var billWithoutSolarForYearTwentySixNf=nf.format(billWithoutSolarForYearTwentySix);
          $("#td_77").text(billWithoutSolarForYearTwentySixNf);
  
          var netCashFlowForYearTwentySix=(netCashFlowForYearTwentyFive+billWithoutSolarForYearTwentyFive);
          var netCashFlowForYearTwentySixNf=nf.format(netCashFlowForYearTwentySix);
          $("#td_76").text(netCashFlowForYearTwentySixNf);
        

          //For Year TwentySeven//
          var billWithSolarForYearTwentySeven=((billWithSolarForYearTwentySix*3/100)+billWithSolarForYearTwentySix);
          var billWithSolarForYearTwentySevenNf=nf.format(billWithSolarForYearTwentySeven);
          $("#td_81").text(billWithSolarForYearTwentySevenNf);
  
          var billWithoutSolarForYearTwentySeven=((billWithoutSolarForYearTwentySix*3/100)+billWithoutSolarForYearTwentySix);
          var billWithoutSolarForYearTwentySevenNf=nf.format(billWithoutSolarForYearTwentySeven);
          $("#td_80").text(billWithoutSolarForYearTwentySevenNf);
  
          var netCashFlowForYearTwentySeven=(netCashFlowForYearTwentySix+billWithoutSolarForYearTwentySix);
          var netCashFlowForYearTwentySevenNf=nf.format(netCashFlowForYearTwentySeven);
          $("#td_79").text(netCashFlowForYearTwentySevenNf);

           //For Year TwentyEight//
           var billWithSolarForYearTwentyEight=((billWithSolarForYearTwentySeven*3/100)+billWithSolarForYearTwentySeven);
           var billWithSolarForYearTwentyEightNf=nf.format(billWithSolarForYearTwentyEight);
           $("#td_84").text(billWithSolarForYearTwentyEightNf);
   
           var billWithoutSolarForYearTwentyEight=((billWithoutSolarForYearTwentySeven*3/100)+billWithoutSolarForYearTwentySeven);
           var billWithoutSolarForYearTwentyEightNf=nf.format(billWithoutSolarForYearTwentyEight);
           $("#td_83").text(billWithoutSolarForYearTwentyEightNf);
   
           var netCashFlowForYearTwentyEight=(netCashFlowForYearTwentySeven+billWithoutSolarForYearTwentySeven);
           var netCashFlowForYearTwentyEightNf=nf.format(netCashFlowForYearTwentyEight);
           $("#td_82").text(netCashFlowForYearTwentyEightNf);

           //For Year TwentyNine//
           var billWithSolarForYearTwentyNine=((billWithSolarForYearTwentyEight*3/100)+billWithSolarForYearTwentyEight);
           var billWithSolarForYearTwentyNineNf=nf.format(billWithSolarForYearTwentyNine);
           $("#td_87").text(billWithSolarForYearTwentyNineNf);
   
           var billWithoutSolarForYearTwentyNine=((billWithoutSolarForYearTwentyEight*3/100)+billWithoutSolarForYearTwentyEight);
           var billWithoutSolarForYearTwentyNineNf=nf.format(billWithoutSolarForYearTwentyNine);
           $("#td_86").text(billWithoutSolarForYearTwentyNineNf);
   
           var netCashFlowForYearTwentyNine=(netCashFlowForYearTwentyEight+billWithoutSolarForYearTwentyEight);
           var netCashFlowForYearTwentyNineNf=nf.format(netCashFlowForYearTwentyNine);
           $("#td_85").text(netCashFlowForYearTwentyNineNf);

            //For Year Thirty//
            var billWithSolarForYearThirty=((billWithSolarForYearTwentyNine*3/100)+billWithSolarForYearTwentyNine);
            var billWithSolarForYearThirtyNf=nf.format(billWithSolarForYearThirty);
            $("#td_90").text(billWithSolarForYearThirtyNf);
    
            var billWithoutSolarForYearThirty=((billWithoutSolarForYearTwentyNine*3/100)+billWithoutSolarForYearTwentyNine);
            var billWithoutSolarForYearThirtyNf=nf.format(billWithoutSolarForYearThirty);
            $("#td_89").text(billWithoutSolarForYearThirtyNf);
    
            var netCashFlowForYearThirty=(netCashFlowForYearTwentyNine+billWithoutSolarForYearTwentyNine);
            var netCashFlowForYearThirtyNf=nf.format(netCashFlowForYearThirty);
            $("#td_88").text(netCashFlowForYearThirtyNf);

    })

})