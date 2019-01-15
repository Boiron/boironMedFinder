angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.boironMedicineFinder', {
    url: '/home',
    views: {
      'tab4': {
        templateUrl: 'templates/boironMedicineFinder.html',
        controller: 'boironMedicineFinderCtrl'
      }
    }
  })

  .state('tabsController.findMedicines', {
    url: '/findmeds',
    views: {
      'tab3': {
        templateUrl: 'templates/findMedicines.html',
        controller: 'findMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findDigestiveMedicines', {
    url: '/page140',
    views: {
      'tab3': {
        templateUrl: 'templates/findDigestiveMedicines.html',
        controller: 'findDigestiveMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findNauseaVomitingMedicines', {
    url: '/page213',
    views: {
      'tab3': {
        templateUrl: 'templates/findNauseaVomitingMedicines.html',
        controller: 'findNauseaVomitingMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findConstipationMedicines', {
    url: '/page153',
    views: {
      'tab3': {
        templateUrl: 'templates/findConstipationMedicines.html',
        controller: 'findConstipationMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findMotionSicknessMedicines', {
    url: '/page371',
    views: {
      'tab3': {
        templateUrl: 'templates/findMotionSicknessMedicines.html',
        controller: 'findMotionSicknessMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findPainTraumaMedicines', {
    url: '/page395',
    views: {
      'tab3': {
        templateUrl: 'templates/findPainTraumaMedicines.html',
        controller: 'findPainTraumaMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findGasMedicines', {
    url: '/page157',
    views: {
      'tab3': {
        templateUrl: 'templates/findGasMedicines.html',
        controller: 'findGasMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findGoutyToeMedicines', {
    url: '/page399',
    views: {
      'tab3': {
        templateUrl: 'templates/findGoutyToeMedicines.html',
        controller: 'findGoutyToeMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findGolferSElbowMedicines', {
    url: '/page400',
    views: {
      'tab3': {
        templateUrl: 'templates/findGolferSElbowMedicines.html',
        controller: 'findGolferSElbowMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findJumperSKneeMedicines', {
    url: '/page402',
    views: {
      'tab3': {
        templateUrl: 'templates/findJumperSKneeMedicines.html',
        controller: 'findJumperSKneeMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findNervePainMedicines', {
    url: '/page403',
    views: {
      'tab3': {
        templateUrl: 'templates/findNervePainMedicines.html',
        controller: 'findNervePainMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findPitcherSShoulderMedicines', {
    url: '/page404',
    views: {
      'tab3': {
        templateUrl: 'templates/findPitcherSShoulderMedicines.html',
        controller: 'findPitcherSShoulderMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findSurgeryMedicines', {
    url: '/page405',
    views: {
      'tab3': {
        templateUrl: 'templates/findSurgeryMedicines.html',
        controller: 'findSurgeryMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findSwimmerSShoulderMedicines', {
    url: '/page406',
    views: {
      'tab3': {
        templateUrl: 'templates/findSwimmerSShoulderMedicines.html',
        controller: 'findSwimmerSShoulderMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findTendinitisMedicines', {
    url: '/page407',
    views: {
      'tab3': {
        templateUrl: 'templates/findTendinitisMedicines.html',
        controller: 'findTendinitisMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findTennisElbowMedicines', {
    url: '/page408',
    views: {
      'tab3': {
        templateUrl: 'templates/findTennisElbowMedicines.html',
        controller: 'findTennisElbowMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findStopSmokingMedicines', {
    url: '/page409',
    views: {
      'tab3': {
        templateUrl: 'templates/findStopSmokingMedicines.html',
        controller: 'findStopSmokingMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findHeadacheMedicines', {
    url: '/page401',
    views: {
      'tab3': {
        templateUrl: 'templates/findHeadacheMedicines.html',
        controller: 'findHeadacheMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findMotionSicknessAndNauseaMedicines', {
    url: '/page369',
    views: {
      'tab3': {
        templateUrl: 'templates/findMotionSicknessAndNauseaMedicines.html',
        controller: 'findMotionSicknessAndNauseaMedicinesCtrl'
      }
    }
  })

  .state('findHeartburnMedicines', {
    url: '/page187',
    templateUrl: 'templates/findHeartburnMedicines.html',
    controller: 'findHeartburnMedicinesCtrl'
  })

  .state('tabsController.findDiarrheaMedicines', {
    url: '/page161',
    views: {
      'tab3': {
        templateUrl: 'templates/findDiarrheaMedicines.html',
        controller: 'findDiarrheaMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findFoodIntoleranceMedicines', {
    url: '/page171',
    views: {
      'tab3': {
        templateUrl: 'templates/findFoodIntoleranceMedicines.html',
        controller: 'findFoodIntoleranceMedicinesCtrl'
      }
    }
  })

  .state('findOverindulgenceMedicines', {
    url: '/page224',
    templateUrl: 'templates/findOverindulgenceMedicines.html',
    controller: 'findOverindulgenceMedicinesCtrl'
  })

  .state('tabsController.findChildrenSMedicines', {
    url: '/page30',
    views: {
      'tab3': {
        templateUrl: 'templates/findChildrenSMedicines.html',
        controller: 'findChildrenSMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findCoughAndThroatMedicines', {
    url: '/page75',
    views: {
      'tab3': {
        templateUrl: 'templates/findCoughAndThroatMedicines.html',
        controller: 'findCoughAndThroatMedicinesCtrl'
      }
    }
  })

  .state('findWetCoughMedicines', {
    url: '/page516',
    templateUrl: 'templates/findWetCoughMedicines.html',
    controller: 'findWetCoughMedicinesCtrl'
  })

  .state('tabsController.findDryCoughMedicines', {
    url: '/page76',
    views: {
      'tab3': {
        templateUrl: 'templates/findDryCoughMedicines.html',
        controller: 'findDryCoughMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findFitfulCoughMedicines', {
    url: '/page84',
    views: {
      'tab3': {
        templateUrl: 'templates/findFitfulCoughMedicines.html',
        controller: 'findFitfulCoughMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findArthritisPainMedicines', {
    url: '/page336',
    views: {
      'tab3': {
        templateUrl: 'templates/findArthritisPainMedicines.html',
        controller: 'findArthritisPainMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findJointPainMedicines', {
    url: '/page337',
    views: {
      'tab3': {
        templateUrl: 'templates/findJointPainMedicines.html',
        controller: 'findJointPainMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findToothacheMedicines', {
    url: '/page394',
    views: {
      'tab3': {
        templateUrl: 'templates/findToothacheMedicines.html',
        controller: 'findToothacheMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findLowerBackPainMedicines', {
    url: '/page339',
    views: {
      'tab3': {
        templateUrl: 'templates/findLowerBackPainMedicines.html',
        controller: 'findLowerBackPainMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findMuscleSorenessMedicines', {
    url: '/page340',
    views: {
      'tab3': {
        templateUrl: 'templates/findMuscleSorenessMedicines.html',
        controller: 'findMuscleSorenessMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findStiffnessMedicines', {
    url: '/page341',
    views: {
      'tab3': {
        templateUrl: 'templates/findStiffnessMedicines.html',
        controller: 'findStiffnessMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findSprainMedicines', {
    url: '/page342',
    views: {
      'tab3': {
        templateUrl: 'templates/findSprainMedicines.html',
        controller: 'findSprainMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findWriterSCrampMedicines', {
    url: '/page343',
    views: {
      'tab3': {
        templateUrl: 'templates/findWriterSCrampMedicines.html',
        controller: 'findWriterSCrampMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findLegCrampMedicines', {
    url: '/page338',
    views: {
      'tab3': {
        templateUrl: 'templates/findLegCrampMedicines.html',
        controller: 'findLegCrampMedicinesCtrl'
      }
    }
  })

  .state('tabsController.athleteSFoot', {
    url: '/page278',
    views: {
      'tab3': {
        templateUrl: 'templates/athleteSFoot.html',
        controller: 'athleteSFootCtrl'
      }
    }
  })

  .state('tabsController.boils', {
    url: '/page279',
    views: {
      'tab3': {
        templateUrl: 'templates/boils.html',
        controller: 'boilsCtrl'
      }
    }
  })

  .state('tabsController.burns', {
    url: '/page280',
    views: {
      'tab3': {
        templateUrl: 'templates/burns.html',
        controller: 'burnsCtrl'
      }
    }
  })

  .state('chappedLips', {
    url: '/page281',
    templateUrl: 'templates/chappedLips.html',
    controller: 'chappedLipsCtrl'
  })

  .state('tabsController.coldSores', {
    url: '/page282',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSores.html',
        controller: 'coldSoresCtrl'
      }
    }
  })

  .state('tabsController.fissures', {
    url: '/page283',
    views: {
      'tab3': {
        templateUrl: 'templates/fissures.html',
        controller: 'fissuresCtrl'
      }
    }
  })

  .state('tabsController.frostnip', {
    url: '/page284',
    views: {
      'tab3': {
        templateUrl: 'templates/frostnip.html',
        controller: 'frostnipCtrl'
      }
    }
  })

  .state('tabsController.findHoarsenessMedicines', {
    url: '/page87',
    views: {
      'tab3': {
        templateUrl: 'templates/findHoarsenessMedicines.html',
        controller: 'findHoarsenessMedicinesCtrl'
      }
    }
  })

  .state('coldAndFluRunnyNoseMeds', {
    url: '/page111',
    templateUrl: 'templates/coldAndFluRunnyNoseMeds.html',
    controller: 'coldAndFluRunnyNoseMedsCtrl'
  })

  .state('tabsController.findEyeCareMedicines', {
    url: '/page229',
    views: {
      'tab3': {
        templateUrl: 'templates/findEyeCareMedicines.html',
        controller: 'findEyeCareMedicinesCtrl'
      }
    }
  })

  .state('tabsController.irritatedEyes', {
    url: '/page230',
    views: {
      'tab3': {
        templateUrl: 'templates/irritatedEyes.html',
        controller: 'irritatedEyesCtrl'
      }
    }
  })

  .state('tabsController.stye', {
    url: '/page232',
    views: {
      'tab3': {
        templateUrl: 'templates/stye.html',
        controller: 'styeCtrl'
      }
    }
  })

  .state('tabsController.strainedEyes', {
    url: '/page231',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyes.html',
        controller: 'strainedEyesCtrl'
      }
    }
  })

  .state('tabsController.coldAndFluSinusPainMeds', {
    url: '/page112',
    views: {
      'tab3': {
        templateUrl: 'templates/coldAndFluSinusPainMeds.html',
        controller: 'coldAndFluSinusPainMedsCtrl'
      }
    }
  })

  .state('tabsController.findColdSoreMedicines', {
    url: '/page148',
    views: {
      'tab3': {
        templateUrl: 'templates/findColdSoreMedicines.html',
        controller: 'findColdSoreMedicinesCtrl'
      }
    }
  })

  .state('tabsController.acne', {
    url: '/page234',
    views: {
      'tab3': {
        templateUrl: 'templates/acne.html',
        controller: 'acneCtrl'
      }
    }
  })

  .state('frostnip2', {
    url: '/page285',
    templateUrl: 'templates/frostnip2.html',
    controller: 'frostnip2Ctrl'
  })

  .state('findConstipationMedicines2', {
    url: '/page152',
    templateUrl: 'templates/findConstipationMedicines2.html',
    controller: 'findConstipationMedicines2Ctrl'
  })

  .state('tabsController.findSoreThroatMedicines', {
    url: '/page113',
    views: {
      'tab3': {
        templateUrl: 'templates/findSoreThroatMedicines.html',
        controller: 'findSoreThroatMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findColdAndFluMedicines', {
    url: '/page20',
    views: {
      'tab3': {
        templateUrl: 'templates/findColdAndFluMedicines.html',
        controller: 'findColdAndFluMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findBodyAchesMedicines', {
    url: '/page71',
    views: {
      'tab3': {
        templateUrl: 'templates/findBodyAchesMedicines.html',
        controller: 'findBodyAchesMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findCankerSoreMedicines', {
    url: '/page141',
    views: {
      'tab3': {
        templateUrl: 'templates/findCankerSoreMedicines.html',
        controller: 'findCankerSoreMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findRunnyNoseMedicines', {
    url: '/page18',
    views: {
      'tab3': {
        templateUrl: 'templates/findRunnyNoseMedicines.html',
        controller: 'findRunnyNoseMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findCirculatoryMedicines', {
    url: '/page58',
    views: {
      'tab3': {
        templateUrl: 'templates/findCirculatoryMedicines.html',
        controller: 'findCirculatoryMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findHemorrhoidMedicines', {
    url: '/page64',
    views: {
      'tab3': {
        templateUrl: 'templates/findHemorrhoidMedicines.html',
        controller: 'findHemorrhoidMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findHiccupsMedicines', {
    url: '/page191',
    views: {
      'tab3': {
        templateUrl: 'templates/findHiccupsMedicines.html',
        controller: 'findHiccupsMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findJetLagMedicines', {
    url: '/page201',
    views: {
      'tab3': {
        templateUrl: 'templates/findJetLagMedicines.html',
        controller: 'findJetLagMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findIndigestionMedicines', {
    url: '/page196',
    views: {
      'tab3': {
        templateUrl: 'templates/findIndigestionMedicines.html',
        controller: 'findIndigestionMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findInsectBiteMedicines', {
    url: '/page286',
    views: {
      'tab3': {
        templateUrl: 'templates/findInsectBiteMedicines.html',
        controller: 'findInsectBiteMedicinesCtrl'
      }
    }
  })

  .state('findPoisonOakIvyOrSumacMeds', {
    url: '/page288',
    templateUrl: 'templates/findPoisonOakIvyOrSumacMeds.html',
    controller: 'findPoisonOakIvyOrSumacMedsCtrl'
  })

  .state('tabsController.findPricklyHeatMiliariaMedicines', {
    url: '/page289',
    views: {
      'tab3': {
        templateUrl: 'templates/findPricklyHeatMiliariaMedicines.html',
        controller: 'findPricklyHeatMiliariaMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findScarMedicines', {
    url: '/page290',
    views: {
      'tab3': {
        templateUrl: 'templates/findScarMedicines.html',
        controller: 'findScarMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findShinglesOrZosterPainMeds', {
    url: '/page291',
    views: {
      'tab3': {
        templateUrl: 'templates/findShinglesOrZosterPainMeds.html',
        controller: 'findShinglesOrZosterPainMedsCtrl'
      }
    }
  })

  .state('tabsController.findSmallWoundMedicines', {
    url: '/page292',
    views: {
      'tab3': {
        templateUrl: 'templates/findSmallWoundMedicines.html',
        controller: 'findSmallWoundMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findSunAllergyMedicines', {
    url: '/page293',
    views: {
      'tab3': {
        templateUrl: 'templates/findSunAllergyMedicines.html',
        controller: 'findSunAllergyMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findSunburnMedicines', {
    url: '/page294',
    views: {
      'tab3': {
        templateUrl: 'templates/findSunburnMedicines.html',
        controller: 'findSunburnMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findWartMedicines', {
    url: '/page295',
    views: {
      'tab3': {
        templateUrl: 'templates/findWartMedicines.html',
        controller: 'findWartMedicinesCtrl'
      }
    }
  })

  .state('findPoisonOakIvyOrSumacMeds2', {
    url: '/page306',
    templateUrl: 'templates/findPoisonOakIvyOrSumacMeds2.html',
    controller: 'findPoisonOakIvyOrSumacMeds2Ctrl'
  })

  .state('tabsController.findItchingMedicines', {
    url: '/page287',
    views: {
      'tab3': {
        templateUrl: 'templates/findItchingMedicines.html',
        controller: 'findItchingMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findChildrenSEaracheMedicine', {
    url: '/page34',
    views: {
      'tab3': {
        templateUrl: 'templates/findChildrenSEaracheMedicine.html',
        controller: 'findChildrenSEaracheMedicineCtrl'
      }
    }
  })

  .state('tabsController.findSnoringMedicines', {
    url: '/page208',
    views: {
      'tab3': {
        templateUrl: 'templates/findSnoringMedicines.html',
        controller: 'findSnoringMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findCrustyNostrilMedicines', {
    url: '/page93',
    views: {
      'tab3': {
        templateUrl: 'templates/findCrustyNostrilMedicines.html',
        controller: 'findCrustyNostrilMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findEaracheMedicines', {
    url: '/page97',
    views: {
      'tab3': {
        templateUrl: 'templates/findEaracheMedicines.html',
        controller: 'findEaracheMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findStuffyNoseMedicines', {
    url: '/page135',
    views: {
      'tab3': {
        templateUrl: 'templates/findStuffyNoseMedicines.html',
        controller: 'findStuffyNoseMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findSleeplessnessMeds', {
    url: '/page47',
    views: {
      'tab3': {
        templateUrl: 'templates/findSleeplessnessMeds.html',
        controller: 'findSleeplessnessMedsCtrl'
      }
    }
  })

  .state('tabsController.findStressAndSleepMedicines', {
    url: '/page410',
    views: {
      'tab3': {
        templateUrl: 'templates/findStressAndSleepMedicines.html',
        controller: 'findStressAndSleepMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findApprehensionMedicines', {
    url: '/page411',
    views: {
      'tab3': {
        templateUrl: 'templates/findApprehensionMedicines.html',
        controller: 'findApprehensionMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findGeneralFatigueMedicines', {
    url: '/page412',
    views: {
      'tab3': {
        templateUrl: 'templates/findGeneralFatigueMedicines.html',
        controller: 'findGeneralFatigueMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findHairLossMedicines', {
    url: '/page413',
    views: {
      'tab3': {
        templateUrl: 'templates/findHairLossMedicines.html',
        controller: 'findHairLossMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findIrritabilityMedicines', {
    url: '/page414',
    views: {
      'tab3': {
        templateUrl: 'templates/findIrritabilityMedicines.html',
        controller: 'findIrritabilityMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findNightSweatsMedicines', {
    url: '/page415',
    views: {
      'tab3': {
        templateUrl: 'templates/findNightSweatsMedicines.html',
        controller: 'findNightSweatsMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findPerimenopauseMedicines', {
    url: '/page423',
    views: {
      'tab3': {
        templateUrl: 'templates/findPerimenopauseMedicines.html',
        controller: 'findPerimenopauseMedicinesCtrl'
      }
    }
  })

  .state('findPremenstrualSyndromeMedicines', {
    url: '/page424',
    templateUrl: 'templates/findPremenstrualSyndromeMedicines.html',
    controller: 'findPremenstrualSyndromeMedicinesCtrl'
  })

  .state('tabsController.findProfuseSweatingMedicines', {
    url: '/page425',
    views: {
      'tab3': {
        templateUrl: 'templates/findProfuseSweatingMedicines.html',
        controller: 'findProfuseSweatingMedicinesCtrl'
      }
    }
  })

  .state('findSleeplessnessMedicines', {
    url: '/page426',
    templateUrl: 'templates/findSleeplessnessMedicines.html',
    controller: 'findSleeplessnessMedicinesCtrl'
  })

  .state('tabsController.findWomenSHealthMedicines', {
    url: '/page416',
    views: {
      'tab3': {
        templateUrl: 'templates/findWomenSHealthMedicines.html',
        controller: 'findWomenSHealthMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findNosebleedMedicines', {
    url: '/page39',
    views: {
      'tab3': {
        templateUrl: 'templates/findNosebleedMedicines.html',
        controller: 'findNosebleedMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findOralCareMedicines', {
    url: '/page392',
    views: {
      'tab3': {
        templateUrl: 'templates/findOralCareMedicines.html',
        controller: 'findOralCareMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findBleedingGumsMedicines', {
    url: '/page393',
    views: {
      'tab3': {
        templateUrl: 'templates/findBleedingGumsMedicines.html',
        controller: 'findBleedingGumsMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findChildrenSRestlessSleepMeds', {
    url: '/page43',
    views: {
      'tab3': {
        templateUrl: 'templates/findChildrenSRestlessSleepMeds.html',
        controller: 'findChildrenSRestlessSleepMedsCtrl'
      }
    }
  })

  .state('tabsController.findHeavyLegsMedicines', {
    url: '/page60',
    views: {
      'tab3': {
        templateUrl: 'templates/findHeavyLegsMedicines.html',
        controller: 'findHeavyLegsMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findNasalCongestionMedicines', {
    url: '/page21',
    views: {
      'tab3': {
        templateUrl: 'templates/findNasalCongestionMedicines.html',
        controller: 'findNasalCongestionMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findSunAllergyMedicines2', {
    url: '/page26',
    views: {
      'tab3': {
        templateUrl: 'templates/findSunAllergyMedicines2.html',
        controller: 'findSunAllergyMedicines2Ctrl'
      }
    }
  })

  .state('tabsController.findWomenSHeadacheMedicines', {
    url: '/page417',
    views: {
      'tab3': {
        templateUrl: 'templates/findWomenSHeadacheMedicines.html',
        controller: 'findWomenSHeadacheMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findHeavyMenstruationMedicines', {
    url: '/page418',
    views: {
      'tab3': {
        templateUrl: 'templates/findHeavyMenstruationMedicines.html',
        controller: 'findHeavyMenstruationMedicinesCtrl'
      }
    }
  })

  .state('tabsController.findHotFlashMedicines', {
    url: '/page419',
    views: {
      'tab3': {
        templateUrl: 'templates/findHotFlashMedicines.html',
        controller: 'findHotFlashMedicinesCtrl'
      }
    }
  })

  .state('findIrritabilityMedicines2', {
    url: '/page420',
    templateUrl: 'templates/findIrritabilityMedicines2.html',
    controller: 'findIrritabilityMedicines2Ctrl'
  })

  .state('findNightSweatMedicines', {
    url: '/page422',
    templateUrl: 'templates/findNightSweatMedicines.html',
    controller: 'findNightSweatMedicinesCtrl'
  })

  .state('tabsController.findMenstrualCrampMedicines', {
    url: '/page421',
    views: {
      'tab3': {
        templateUrl: 'templates/findMenstrualCrampMedicines.html',
        controller: 'findMenstrualCrampMedicinesCtrl'
      }
    }
  })

  .state('tabsController.allergy', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/allergy.html',
        controller: 'allergyCtrl'
      }
    }
  })

  .state('tabsController.findFeverMedicines', {
    url: '/page99',
    views: {
      'tab3': {
        templateUrl: 'templates/findFeverMedicines.html',
        controller: 'findFeverMedicinesCtrl'
      }
    }
  })

  .state('findWartsMedicines', {
    url: '/page329',
    templateUrl: 'templates/findWartsMedicines.html',
    controller: 'findWartsMedicinesCtrl'
  })

  .state('tabsController.findSkinMedicinesFirstAid', {
    url: '/page24',
    views: {
      'tab3': {
        templateUrl: 'templates/findSkinMedicinesFirstAid.html',
        controller: 'findSkinMedicinesFirstAidCtrl'
      }
    }
  })

  .state('tabsController.findJointAndMusclePainMeds', {
    url: '/page313',
    views: {
      'tab3': {
        templateUrl: 'templates/findJointAndMusclePainMeds.html',
        controller: 'findJointAndMusclePainMedsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.findAStore'
      2) Using $state.go programatically:
        $state.go('tabsController.findAStore');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/findastore
      /page1/tab3/findastore
      /page1/tab8/findastore
  */
  .state('tabsController.findAStore', {
    url: '/findastore',
    views: {
      'tab4': {
        templateUrl: 'templates/findAStore.html',
        controller: 'findAStoreCtrl'
      },
      'tab3': {
        templateUrl: 'templates/findAStore.html',
        controller: 'findAStoreCtrl'
      },
      'tab8': {
        templateUrl: 'templates/findAStore.html',
        controller: 'findAStoreCtrl'
      }
    }
  })

  .state('tabsController.coldUrticaria', {
    url: '/coldurticaria',
    views: {
      'tab3': {
        templateUrl: 'templates/coldUrticaria.html',
        controller: 'coldUrticariaCtrl'
      }
    }
  })

  .state('tabsController.babyColic', {
    url: '/page29',
    views: {
      'tab3': {
        templateUrl: 'templates/babyColic.html',
        controller: 'babyColicCtrl'
      }
    }
  })

  .state('tabsController.teething', {
    url: '/page57',
    views: {
      'tab3': {
        templateUrl: 'templates/teething.html',
        controller: 'teethingCtrl'
      }
    }
  })

  .state('tabsController.toothachesFromNewTeeth', {
    url: '/page387',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesFromNewTeeth.html',
        controller: 'toothachesFromNewTeethCtrl'
      }
    }
  })

  .state('tabsController.toothachesHypersensitivityToPain', {
    url: '/page388',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesHypersensitivityToPain.html',
        controller: 'toothachesHypersensitivityToPainCtrl'
      }
    }
  })

  .state('tabsController.nervePainHypersensitivityToPain', {
    url: '/page446',
    views: {
      'tab3': {
        templateUrl: 'templates/nervePainHypersensitivityToPain.html',
        controller: 'nervePainHypersensitivityToPainCtrl'
      }
    }
  })

  .state('tabsController.nervePainSciatica', {
    url: '/page447',
    views: {
      'tab3': {
        templateUrl: 'templates/nervePainSciatica.html',
        controller: 'nervePainSciaticaCtrl'
      }
    }
  })

  .state('tabsController.toothachesTriggeredByColdDrinks', {
    url: '/page389',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesTriggeredByColdDrinks.html',
        controller: 'toothachesTriggeredByColdDrinksCtrl'
      }
    }
  })

  .state('tabsController.toothachesTriggeredByHotDrinks', {
    url: '/page390',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesTriggeredByHotDrinks.html',
        controller: 'toothachesTriggeredByHotDrinksCtrl'
      }
    }
  })

  .state('tabsController.toothachesWithShootingPain', {
    url: '/page391',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesWithShootingPain.html',
        controller: 'toothachesWithShootingPainCtrl'
      }
    }
  })

  .state('tabsController.boneTraumaHealingFracture', {
    url: '/page396',
    views: {
      'tab3': {
        templateUrl: 'templates/boneTraumaHealingFracture.html',
        controller: 'boneTraumaHealingFractureCtrl'
      }
    }
  })

  .state('tabsController.goutyToeImprovedByStrongPressure', {
    url: '/page427',
    views: {
      'tab3': {
        templateUrl: 'templates/goutyToeImprovedByStrongPressure.html',
        controller: 'goutyToeImprovedByStrongPressureCtrl'
      }
    }
  })

  .state('tabsController.headacheAboveTheEyes', {
    url: '/page432',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheAboveTheEyes.html',
        controller: 'headacheAboveTheEyesCtrl'
      }
    }
  })

  .state('tabsController.headacheAtTheBackOfTheHead', {
    url: '/page433',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheAtTheBackOfTheHead.html',
        controller: 'headacheAtTheBackOfTheHeadCtrl'
      }
    }
  })

  .state('tabsController.headacheFromDelayingMeals', {
    url: '/page434',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromDelayingMeals.html',
        controller: 'headacheFromDelayingMealsCtrl'
      }
    }
  })

  .state('headacheFromDelayingMeals2', {
    url: '/page435',
    templateUrl: 'templates/headacheFromDelayingMeals2.html',
    controller: 'headacheFromDelayingMeals2Ctrl'
  })

  .state('tabsController.goutyToeWorsenedByTheSlightestMovement', {
    url: '/page428',
    views: {
      'tab3': {
        templateUrl: 'templates/goutyToeWorsenedByTheSlightestMovement.html',
        controller: 'goutyToeWorsenedByTheSlightestMovementCtrl'
      }
    }
  })

  .state('tabsController.goutyToeOther', {
    url: '/page429',
    views: {
      'tab3': {
        templateUrl: 'templates/goutyToeOther.html',
        controller: 'goutyToeOtherCtrl'
      }
    }
  })

  .state('tabsController.earachesColdWeather', {
    url: '/page35',
    views: {
      'tab3': {
        templateUrl: 'templates/earachesColdWeather.html',
        controller: 'earachesColdWeatherCtrl'
      }
    }
  })

  .state('tabsController.nosebleedsFromACold', {
    url: '/page40',
    views: {
      'tab3': {
        templateUrl: 'templates/nosebleedsFromACold.html',
        controller: 'nosebleedsFromAColdCtrl'
      }
    }
  })

  .state('tabsController.nosebleedsFromTrauma', {
    url: '/page41',
    views: {
      'tab3': {
        templateUrl: 'templates/nosebleedsFromTrauma.html',
        controller: 'nosebleedsFromTraumaCtrl'
      }
    }
  })

  .state('tabsController.restlessSleepSleepwalking', {
    url: '/page44',
    views: {
      'tab3': {
        templateUrl: 'templates/restlessSleepSleepwalking.html',
        controller: 'restlessSleepSleepwalkingCtrl'
      }
    }
  })

  .state('tabsController.crustyNostrilsFromThickGreenishDischarge', {
    url: '/page94',
    views: {
      'tab3': {
        templateUrl: 'templates/crustyNostrilsFromThickGreenishDischarge.html',
        controller: 'crustyNostrilsFromThickGreenishDischargeCtrl'
      }
    }
  })

  .state('tabsController.earCongestionImprovedBySwallowing', {
    url: '/page96',
    views: {
      'tab3': {
        templateUrl: 'templates/earCongestionImprovedBySwallowing.html',
        controller: 'earCongestionImprovedBySwallowingCtrl'
      }
    }
  })

  .state('tabsController.crustyNostrilsFromWateryDischarge', {
    url: '/page95',
    views: {
      'tab3': {
        templateUrl: 'templates/crustyNostrilsFromWateryDischarge.html',
        controller: 'crustyNostrilsFromWateryDischargeCtrl'
      }
    }
  })

  .state('tabsController.restlessSleepWithNightmares', {
    url: '/page45',
    views: {
      'tab3': {
        templateUrl: 'templates/restlessSleepWithNightmares.html',
        controller: 'restlessSleepWithNightmaresCtrl'
      }
    }
  })

  .state('tabsController.restlessSleepProfuseSweating', {
    url: '/page46',
    views: {
      'tab3': {
        templateUrl: 'templates/restlessSleepProfuseSweating.html',
        controller: 'restlessSleepProfuseSweatingCtrl'
      }
    }
  })

  .state('tabsController.nosebleedsSpontaneous', {
    url: '/page42',
    views: {
      'tab3': {
        templateUrl: 'templates/nosebleedsSpontaneous.html',
        controller: 'nosebleedsSpontaneousCtrl'
      }
    }
  })

  .state('tabsController.earachesTeething', {
    url: '/page36',
    views: {
      'tab3': {
        templateUrl: 'templates/earachesTeething.html',
        controller: 'earachesTeethingCtrl'
      }
    }
  })

  .state('tabsController.earachesModerateFever', {
    url: '/page37',
    views: {
      'tab3': {
        templateUrl: 'templates/earachesModerateFever.html',
        controller: 'earachesModerateFeverCtrl'
      }
    }
  })

  .state('tabsController.growingPains', {
    url: '/page38',
    views: {
      'tab3': {
        templateUrl: 'templates/growingPains.html',
        controller: 'growingPainsCtrl'
      }
    }
  })

  .state('tabsController.cradleCap', {
    url: '/page31',
    views: {
      'tab3': {
        templateUrl: 'templates/cradleCap.html',
        controller: 'cradleCapCtrl'
      }
    }
  })

  .state('tabsController.diaperRash', {
    url: '/page33',
    views: {
      'tab3': {
        templateUrl: 'templates/diaperRash.html',
        controller: 'diaperRashCtrl'
      }
    }
  })

  .state('tabsController.cold', {
    url: '/page32',
    views: {
      'tab3': {
        templateUrl: 'templates/cold.html',
        controller: 'coldCtrl'
      }
    }
  })

  .state('tabsController.feverDryAndHotSkin', {
    url: '/page101',
    views: {
      'tab3': {
        templateUrl: 'templates/feverDryAndHotSkin.html',
        controller: 'feverDryAndHotSkinCtrl'
      }
    }
  })

  .state('runnyNoseGrayishDischarge', {
    url: '/page115',
    templateUrl: 'templates/runnyNoseGrayishDischarge.html',
    controller: 'runnyNoseGrayishDischargeCtrl'
  })

  .state('runnyNoseLingeringAfterColdOrFlu', {
    url: '/page116',
    templateUrl: 'templates/runnyNoseLingeringAfterColdOrFlu.html',
    controller: 'runnyNoseLingeringAfterColdOrFluCtrl'
  })

  .state('runnyNoseRunnyDuringDayDryAtNight', {
    url: '/page117',
    templateUrl: 'templates/runnyNoseRunnyDuringDayDryAtNight.html',
    controller: 'runnyNoseRunnyDuringDayDryAtNightCtrl'
  })

  .state('runnyNoseSneezingInTheMorning', {
    url: '/page118',
    templateUrl: 'templates/runnyNoseSneezingInTheMorning.html',
    controller: 'runnyNoseSneezingInTheMorningCtrl'
  })

  .state('tabsController.stuffyNoseCloggedEars', {
    url: '/page136',
    views: {
      'tab3': {
        templateUrl: 'templates/stuffyNoseCloggedEars.html',
        controller: 'stuffyNoseCloggedEarsCtrl'
      }
    }
  })

  .state('tabsController.stuffyNoseThickGreenishDischarge', {
    url: '/page137',
    views: {
      'tab3': {
        templateUrl: 'templates/stuffyNoseThickGreenishDischarge.html',
        controller: 'stuffyNoseThickGreenishDischargeCtrl'
      }
    }
  })

  .state('tabsController.stuffyNoseTriggeredByDampnessAndCold', {
    url: '/page138',
    views: {
      'tab3': {
        templateUrl: 'templates/stuffyNoseTriggeredByDampnessAndCold.html',
        controller: 'stuffyNoseTriggeredByDampnessAndColdCtrl'
      }
    }
  })

  .state('tabsController.stuffyNoseOther', {
    url: '/page139',
    views: {
      'tab3': {
        templateUrl: 'templates/stuffyNoseOther.html',
        controller: 'stuffyNoseOtherCtrl'
      }
    }
  })

  .state('runnyNoseWateryDischarge', {
    url: '/page119',
    templateUrl: 'templates/runnyNoseWateryDischarge.html',
    controller: 'runnyNoseWateryDischargeCtrl'
  })

  .state('runnyNoseOther', {
    url: '/page120',
    templateUrl: 'templates/runnyNoseOther.html',
    controller: 'runnyNoseOtherCtrl'
  })

  .state('sinusPainPainAtTheBaseOfTheNoseBetweenTheEyes', {
    url: '/page121',
    templateUrl: 'templates/sinusPainPainAtTheBaseOfTheNoseBetweenTheEyes.html',
    controller: 'sinusPainPainAtTheBaseOfTheNoseBetweenTheEyesCtrl'
  })

  .state('runnyNose6Months', {
    url: '/page114',
    templateUrl: 'templates/runnyNose6Months.html',
    controller: 'runnyNose6MonthsCtrl'
  })

  .state('tabsController.fluSymptoms', {
    url: '/page107',
    views: {
      'tab3': {
        templateUrl: 'templates/fluSymptoms.html',
        controller: 'fluSymptomsCtrl'
      }
    }
  })

  .state('tabsController.feverImprovedByStayingImmobile', {
    url: '/page102',
    views: {
      'tab3': {
        templateUrl: 'templates/feverImprovedByStayingImmobile.html',
        controller: 'feverImprovedByStayingImmobileCtrl'
      }
    }
  })

  .state('tabsController.feverWithExhaustion', {
    url: '/page103',
    views: {
      'tab3': {
        templateUrl: 'templates/feverWithExhaustion.html',
        controller: 'feverWithExhaustionCtrl'
      }
    }
  })

  .state('tabsController.soreThroatFeelingOfSplinterInThroat', {
    url: '/page126',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatFeelingOfSplinterInThroat.html',
        controller: 'soreThroatFeelingOfSplinterInThroatCtrl'
      }
    }
  })

  .state('tabsController.soreThroatItchingPainImprovedByColdLiquids', {
    url: '/page127',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatItchingPainImprovedByColdLiquids.html',
        controller: 'soreThroatItchingPainImprovedByColdLiquidsCtrl'
      }
    }
  })

  .state('tabsController.soreThroatWithBadTasteInTheMouth', {
    url: '/page128',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithBadTasteInTheMouth.html',
        controller: 'soreThroatWithBadTasteInTheMouthCtrl'
      }
    }
  })

  .state('tabsController.soreThroatWithCroupyCough', {
    url: '/page129',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithCroupyCough.html',
        controller: 'soreThroatWithCroupyCoughCtrl'
      }
    }
  })

  .state('tabsController.soreThroatWithExcessiveSalivation', {
    url: '/page130',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithExcessiveSalivation.html',
        controller: 'soreThroatWithExcessiveSalivationCtrl'
      }
    }
  })

  .state('tabsController.soreThroatWithPainRadiatingToTheEars', {
    url: '/page131',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithPainRadiatingToTheEars.html',
        controller: 'soreThroatWithPainRadiatingToTheEarsCtrl'
      }
    }
  })

  .state('tabsController.soreThroatWithPainWhenSwallowing', {
    url: '/page132',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithPainWhenSwallowing.html',
        controller: 'soreThroatWithPainWhenSwallowingCtrl'
      }
    }
  })

  .state('tabsController.soreThroatWorseAtNight', {
    url: '/page133',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWorseAtNight.html',
        controller: 'soreThroatWorseAtNightCtrl'
      }
    }
  })

  .state('tabsController.soreThroatOther', {
    url: '/page134',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatOther.html',
        controller: 'soreThroatOtherCtrl'
      }
    }
  })

  .state('tabsController.lossOfSmellAndTaste', {
    url: '/page108',
    views: {
      'tab3': {
        templateUrl: 'templates/lossOfSmellAndTaste.html',
        controller: 'lossOfSmellAndTasteCtrl'
      }
    }
  })

  .state('tabsController.cankerSoreClearlyDelimited', {
    url: '/page142',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreClearlyDelimited.html',
        controller: 'cankerSoreClearlyDelimitedCtrl'
      }
    }
  })

  .state('tabsController.cankerSoreDeep', {
    url: '/page143',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreDeep.html',
        controller: 'cankerSoreDeepCtrl'
      }
    }
  })

  .state('tabsController.cankerSoreInChildren', {
    url: '/page144',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreInChildren.html',
        controller: 'cankerSoreInChildrenCtrl'
      }
    }
  })

  .state('tabsController.cankerSoreOnTheCheeks', {
    url: '/page145',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreOnTheCheeks.html',
        controller: 'cankerSoreOnTheCheeksCtrl'
      }
    }
  })

  .state('tabsController.cankerSoreSensitiveToHeatOrCold', {
    url: '/page147',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreSensitiveToHeatOrCold.html',
        controller: 'cankerSoreSensitiveToHeatOrColdCtrl'
      }
    }
  })

  .state('tabsController.cankerSoreWithBadTasteInTheMouth', {
    url: '/page146',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreWithBadTasteInTheMouth.html',
        controller: 'cankerSoreWithBadTasteInTheMouthCtrl'
      }
    }
  })

  .state('tabsController.moderateOrLowFever', {
    url: '/page109',
    views: {
      'tab3': {
        templateUrl: 'templates/moderateOrLowFever.html',
        controller: 'moderateOrLowFeverCtrl'
      }
    }
  })

  .state('tabsController.postnasalDrip', {
    url: '/page110',
    views: {
      'tab3': {
        templateUrl: 'templates/postnasalDrip.html',
        controller: 'postnasalDripCtrl'
      }
    }
  })

  .state('tabsController.feverWithHypersensitivityToLightAndNoise', {
    url: '/page104',
    views: {
      'tab3': {
        templateUrl: 'templates/feverWithHypersensitivityToLightAndNoise.html',
        controller: 'feverWithHypersensitivityToLightAndNoiseCtrl'
      }
    }
  })

  .state('acneOnTheForeheadAndTheBack', {
    url: '/page235',
    templateUrl: 'templates/acneOnTheForeheadAndTheBack.html',
    controller: 'acneOnTheForeheadAndTheBackCtrl'
  })

  .state('tabsController.insectBitesChiggers', {
    url: '/page271',
    views: {
      'tab3': {
        templateUrl: 'templates/insectBitesChiggers.html',
        controller: 'insectBitesChiggersCtrl'
      }
    }
  })

  .state('tabsController.insectBitesMisquitoes', {
    url: '/page272',
    views: {
      'tab3': {
        templateUrl: 'templates/insectBitesMisquitoes.html',
        controller: 'insectBitesMisquitoesCtrl'
      }
    }
  })

  .state('tabsController.insectBitesSpiders', {
    url: '/page273',
    views: {
      'tab3': {
        templateUrl: 'templates/insectBitesSpiders.html',
        controller: 'insectBitesSpidersCtrl'
      }
    }
  })

  .state('tabsController.insectBitesWaspsBees', {
    url: '/page274',
    views: {
      'tab3': {
        templateUrl: 'templates/insectBitesWaspsBees.html',
        controller: 'insectBitesWaspsBeesCtrl'
      }
    }
  })

  .state('tabsController.itchingAtNight', {
    url: '/page275',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingAtNight.html',
        controller: 'itchingAtNightCtrl'
      }
    }
  })

  .state('tabsController.itchingFromSkinAllergy', {
    url: '/page296',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingFromSkinAllergy.html',
        controller: 'itchingFromSkinAllergyCtrl'
      }
    }
  })

  .state('tabsController.itchingInElderlyPersons', {
    url: '/page297',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingInElderlyPersons.html',
        controller: 'itchingInElderlyPersonsCtrl'
      }
    }
  })

  .state('itchingNoneOfTheAbove', {
    url: '/page298',
    templateUrl: 'templates/itchingNoneOfTheAbove.html',
    controller: 'itchingNoneOfTheAboveCtrl'
  })

  .state('tabsController.itchingOfSurgicalWounds', {
    url: '/page299',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingOfSurgicalWounds.html',
        controller: 'itchingOfSurgicalWoundsCtrl'
      }
    }
  })

  .state('tabsController.itchingOfWarts', {
    url: '/page300',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingOfWarts.html',
        controller: 'itchingOfWartsCtrl'
      }
    }
  })

  .state('tabsController.itchingTriggeredByDampnessAndCold', {
    url: '/page301',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingTriggeredByDampnessAndCold.html',
        controller: 'itchingTriggeredByDampnessAndColdCtrl'
      }
    }
  })

  .state('tabsController.itchingTriggeredByTheContactOfWool', {
    url: '/page302',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingTriggeredByTheContactOfWool.html',
        controller: 'itchingTriggeredByTheContactOfWoolCtrl'
      }
    }
  })

  .state('tabsController.itchingWhenUndressing', {
    url: '/page303',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingWhenUndressing.html',
        controller: 'itchingWhenUndressingCtrl'
      }
    }
  })

  .state('tabsController.itchingWithBurningPain', {
    url: '/page304',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingWithBurningPain.html',
        controller: 'itchingWithBurningPainCtrl'
      }
    }
  })

  .state('tabsController.itchingWorseWithHeatOrWater', {
    url: '/page305',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingWorseWithHeatOrWater.html',
        controller: 'itchingWorseWithHeatOrWaterCtrl'
      }
    }
  })

  .state('poisonOakEtcRedItchySkin', {
    url: '/page308',
    templateUrl: 'templates/poisonOakEtcRedItchySkin.html',
    controller: 'poisonOakEtcRedItchySkinCtrl'
  })

  .state('poisonOakEtcWithBlisters', {
    url: '/page309',
    templateUrl: 'templates/poisonOakEtcWithBlisters.html',
    controller: 'poisonOakEtcWithBlistersCtrl'
  })

  .state('tabsController.pricklyHeatMiliariaItchingIsWorsenedByContactWithWater', {
    url: '/page310',
    views: {
      'tab3': {
        templateUrl: 'templates/pricklyHeatMiliariaItchingIsWorsenedByContactWithWater.html',
        controller: 'pricklyHeatMiliariaItchingIsWorsenedByContactWithWaterCtrl'
      }
    }
  })

  .state('tabsController.shinglesWithBluishWhiteVesicles', {
    url: '/page318',
    views: {
      'tab3': {
        templateUrl: 'templates/shinglesWithBluishWhiteVesicles.html',
        controller: 'shinglesWithBluishWhiteVesiclesCtrl'
      }
    }
  })

  .state('tabsController.shinglesWithBurningAndLargeVesicles', {
    url: '/page319',
    views: {
      'tab3': {
        templateUrl: 'templates/shinglesWithBurningAndLargeVesicles.html',
        controller: 'shinglesWithBurningAndLargeVesiclesCtrl'
      }
    }
  })

  .state('tabsController.shinglesWithItchingAndSmallClearVesicles', {
    url: '/page320',
    views: {
      'tab3': {
        templateUrl: 'templates/shinglesWithItchingAndSmallClearVesicles.html',
        controller: 'shinglesWithItchingAndSmallClearVesiclesCtrl'
      }
    }
  })

  .state('tabsController.shinglesWorsenedByTouchOrJolts', {
    url: '/page321',
    views: {
      'tab3': {
        templateUrl: 'templates/shinglesWorsenedByTouchOrJolts.html',
        controller: 'shinglesWorsenedByTouchOrJoltsCtrl'
      }
    }
  })

  .state('tabsController.sunAllergyBeforeExposure', {
    url: '/page324',
    views: {
      'tab3': {
        templateUrl: 'templates/sunAllergyBeforeExposure.html',
        controller: 'sunAllergyBeforeExposureCtrl'
      }
    }
  })

  .state('tabsController.pricklyHeatMiliariaItchingWithHypersensitivityToTouch', {
    url: '/page311',
    views: {
      'tab3': {
        templateUrl: 'templates/pricklyHeatMiliariaItchingWithHypersensitivityToTouch.html',
        controller: 'pricklyHeatMiliariaItchingWithHypersensitivityToTouchCtrl'
      }
    }
  })

  .state('tabsController.itchingFromDrySkin', {
    url: '/page276',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingFromDrySkin.html',
        controller: 'itchingFromDrySkinCtrl'
      }
    }
  })

  .state('tabsController.scarsFromBurns', {
    url: '/page312',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsFromBurns.html',
        controller: 'scarsFromBurnsCtrl'
      }
    }
  })

  .state('tabsController.scarsFromChickepox', {
    url: '/page307',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsFromChickepox.html',
        controller: 'scarsFromChickepoxCtrl'
      }
    }
  })

  .state('tabsController.scarsFromSurgery', {
    url: '/page314',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsFromSurgery.html',
        controller: 'scarsFromSurgeryCtrl'
      }
    }
  })

  .state('scarsPainfulScars', {
    url: '/page315',
    templateUrl: 'templates/scarsPainfulScars.html',
    controller: 'scarsPainfulScarsCtrl'
  })

  .state('tabsController.wartsAroundTheNails', {
    url: '/page316',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsAroundTheNails.html',
        controller: 'wartsAroundTheNailsCtrl'
      }
    }
  })

  .state('tabsController.wartsFlatTranslucent', {
    url: '/page330',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsFlatTranslucent.html',
        controller: 'wartsFlatTranslucentCtrl'
      }
    }
  })

  .state('tabsController.wartsHardCallousedWarts', {
    url: '/page331',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsHardCallousedWarts.html',
        controller: 'wartsHardCallousedWartsCtrl'
      }
    }
  })

  .state('tabsController.wartsOnTheFace', {
    url: '/page332',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsOnTheFace.html',
        controller: 'wartsOnTheFaceCtrl'
      }
    }
  })

  .state('tabsController.wartsSingleLargePlantarWart', {
    url: '/page333',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsSingleLargePlantarWart.html',
        controller: 'wartsSingleLargePlantarWartCtrl'
      }
    }
  })

  .state('tabsController.wartsUnderTheNails', {
    url: '/page334',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsUnderTheNails.html',
        controller: 'wartsUnderTheNailsCtrl'
      }
    }
  })

  .state('tabsController.sunburnPinkSkinItching', {
    url: '/page325',
    views: {
      'tab3': {
        templateUrl: 'templates/sunburnPinkSkinItching.html',
        controller: 'sunburnPinkSkinItchingCtrl'
      }
    }
  })

  .state('tabsController.sunburnRedSkinItching', {
    url: '/page326',
    views: {
      'tab3': {
        templateUrl: 'templates/sunburnRedSkinItching.html',
        controller: 'sunburnRedSkinItchingCtrl'
      }
    }
  })

  .state('tabsController.sunInducedSkinRash', {
    url: '/page327',
    views: {
      'tab3': {
        templateUrl: 'templates/sunInducedSkinRash.html',
        controller: 'sunInducedSkinRashCtrl'
      }
    }
  })

  .state('tabsController.turfBurn', {
    url: '/page328',
    views: {
      'tab3': {
        templateUrl: 'templates/turfBurn.html',
        controller: 'turfBurnCtrl'
      }
    }
  })

  .state('tabsController.scarsWithItching', {
    url: '/page317',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsWithItching.html',
        controller: 'scarsWithItchingCtrl'
      }
    }
  })

  .state('tabsController.scarsThickScars', {
    url: '/page335',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsThickScars.html',
        controller: 'scarsThickScarsCtrl'
      }
    }
  })

  .state('acnePustularAcne', {
    url: '/page246',
    templateUrl: 'templates/acnePustularAcne.html',
    controller: 'acnePustularAcneCtrl'
  })

  .state('acneOther', {
    url: '/page247',
    templateUrl: 'templates/acneOther.html',
    controller: 'acneOtherCtrl'
  })

  .state('tabsController.blisters', {
    url: '/page250',
    views: {
      'tab3': {
        templateUrl: 'templates/blisters.html',
        controller: 'blistersCtrl'
      }
    }
  })

  .state('tabsController.burnsBlisters', {
    url: '/page251',
    views: {
      'tab3': {
        templateUrl: 'templates/burnsBlisters.html',
        controller: 'burnsBlistersCtrl'
      }
    }
  })

  .state('tabsController.burnsPinkSkinItching', {
    url: '/page252',
    views: {
      'tab3': {
        templateUrl: 'templates/burnsPinkSkinItching.html',
        controller: 'burnsPinkSkinItchingCtrl'
      }
    }
  })

  .state('tabsController.burnsRedSkinBurning', {
    url: '/page253',
    views: {
      'tab3': {
        templateUrl: 'templates/burnsRedSkinBurning.html',
        controller: 'burnsRedSkinBurningCtrl'
      }
    }
  })

  .state('chappedLipsOnLowerLipsWithDryLips', {
    url: '/page254',
    templateUrl: 'templates/chappedLipsOnLowerLipsWithDryLips.html',
    controller: 'chappedLipsOnLowerLipsWithDryLipsCtrl'
  })

  .state('chappedLipsPerleche', {
    url: '/page255',
    templateUrl: 'templates/chappedLipsPerleche.html',
    controller: 'chappedLipsPerlecheCtrl'
  })

  .state('tabsController.coldSoresCrustStage', {
    url: '/page256',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresCrustStage.html',
        controller: 'coldSoresCrustStageCtrl'
      }
    }
  })

  .state('tabsController.coldSoresOnset', {
    url: '/page257',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresOnset.html',
        controller: 'coldSoresOnsetCtrl'
      }
    }
  })

  .state('tabsController.coldSoresSmallBlisters', {
    url: '/page258',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresSmallBlisters.html',
        controller: 'coldSoresSmallBlistersCtrl'
      }
    }
  })

  .state('tabsController.fissuresCrackedSkin', {
    url: '/page259',
    views: {
      'tab3': {
        templateUrl: 'templates/fissuresCrackedSkin.html',
        controller: 'fissuresCrackedSkinCtrl'
      }
    }
  })

  .state('tabsController.smallWoundsFromASharpObject', {
    url: '/page322',
    views: {
      'tab3': {
        templateUrl: 'templates/smallWoundsFromASharpObject.html',
        controller: 'smallWoundsFromASharpObjectCtrl'
      }
    }
  })

  .state('tabsController.smallWoundsPunctureWounds', {
    url: '/page323',
    views: {
      'tab3': {
        templateUrl: 'templates/smallWoundsPunctureWounds.html',
        controller: 'smallWoundsPunctureWoundsCtrl'
      }
    }
  })

  .state('tabsController.fissuresFingers', {
    url: '/page260',
    views: {
      'tab3': {
        templateUrl: 'templates/fissuresFingers.html',
        controller: 'fissuresFingersCtrl'
      }
    }
  })

  .state('tabsController.fissuresThinPainfulBleedingEasily', {
    url: '/page261',
    views: {
      'tab3': {
        templateUrl: 'templates/fissuresThinPainfulBleedingEasily.html',
        controller: 'fissuresThinPainfulBleedingEasilyCtrl'
      }
    }
  })

  .state('tabsController.fissuresWithOozingAndDryCrustySkin', {
    url: '/page262',
    views: {
      'tab3': {
        templateUrl: 'templates/fissuresWithOozingAndDryCrustySkin.html',
        controller: 'fissuresWithOozingAndDryCrustySkinCtrl'
      }
    }
  })

  .state('tabsController.boilsOnsetOfBoils', {
    url: '/page263',
    views: {
      'tab3': {
        templateUrl: 'templates/boilsOnsetOfBoils.html',
        controller: 'boilsOnsetOfBoilsCtrl'
      }
    }
  })

  .state('tabsController.boilsRecurrentBoils', {
    url: '/page264',
    views: {
      'tab3': {
        templateUrl: 'templates/boilsRecurrentBoils.html',
        controller: 'boilsRecurrentBoilsCtrl'
      }
    }
  })

  .state('tabsController.boilsOther', {
    url: '/page265',
    views: {
      'tab3': {
        templateUrl: 'templates/boilsOther.html',
        controller: 'boilsOtherCtrl'
      }
    }
  })

  .state('tabsController.frostnipBurning', {
    url: '/page266',
    views: {
      'tab3': {
        templateUrl: 'templates/frostnipBurning.html',
        controller: 'frostnipBurningCtrl'
      }
    }
  })

  .state('tabsController.frostnipItchingAtNight', {
    url: '/page267',
    views: {
      'tab3': {
        templateUrl: 'templates/frostnipItchingAtNight.html',
        controller: 'frostnipItchingAtNightCtrl'
      }
    }
  })

  .state('tabsController.frostnipSwollen', {
    url: '/page268',
    views: {
      'tab3': {
        templateUrl: 'templates/frostnipSwollen.html',
        controller: 'frostnipSwollenCtrl'
      }
    }
  })

  .state('tabsController.fromGriefAngerOrVexation', {
    url: '/page269',
    views: {
      'tab3': {
        templateUrl: 'templates/fromGriefAngerOrVexation.html',
        controller: 'fromGriefAngerOrVexationCtrl'
      }
    }
  })

  .state('tabsController.withDigestiveProblems', {
    url: '/page481',
    views: {
      'tab3': {
        templateUrl: 'templates/withDigestiveProblems.html',
        controller: 'withDigestiveProblemsCtrl'
      }
    }
  })

  .state('tabsController.fromPhysicalOverexertionOrStressfulEmotions', {
    url: '/page478',
    views: {
      'tab3': {
        templateUrl: 'templates/fromPhysicalOverexertionOrStressfulEmotions.html',
        controller: 'fromPhysicalOverexertionOrStressfulEmotionsCtrl'
      }
    }
  })

  .state('tabsController.headacheFromStress', {
    url: '/page439',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromStress.html',
        controller: 'headacheFromStressCtrl'
      }
    }
  })

  .state('tabsController.apprehensionAggravatedByEmotion', {
    url: '/page457',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionAggravatedByEmotion.html',
        controller: 'apprehensionAggravatedByEmotionCtrl'
      }
    }
  })

  .state('tabsController.apprehensionHurriednessFromStress', {
    url: '/page458',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionHurriednessFromStress.html',
        controller: 'apprehensionHurriednessFromStressCtrl'
      }
    }
  })

  .state('apprehensionHurriednessFromStress2', {
    url: '/page459',
    templateUrl: 'templates/apprehensionHurriednessFromStress2.html',
    controller: 'apprehensionHurriednessFromStress2Ctrl'
  })

  .state('apprehensionWithLackOfMemory', {
    url: '/page460',
    templateUrl: 'templates/apprehensionWithLackOfMemory.html',
    controller: 'apprehensionWithLackOfMemoryCtrl'
  })

  .state('apprehensionWithGeneralWeakness', {
    url: '/page472',
    templateUrl: 'templates/apprehensionWithGeneralWeakness.html',
    controller: 'apprehensionWithGeneralWeaknessCtrl'
  })

  .state('tabsController.apprehensionWithStomachaches', {
    url: '/page461',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithStomachaches.html',
        controller: 'apprehensionWithStomachachesCtrl'
      }
    }
  })

  .state('apprehensionWithBelching', {
    url: '/page473',
    templateUrl: 'templates/apprehensionWithBelching.html',
    controller: 'apprehensionWithBelchingCtrl'
  })

  .state('tabsController.apprehensionWithGeneralWeakness2', {
    url: '/page463',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithGeneralWeakness2.html',
        controller: 'apprehensionWithGeneralWeakness2Ctrl'
      }
    }
  })

  .state('tabsController.stageFright', {
    url: '/page468',
    views: {
      'tab3': {
        templateUrl: 'templates/stageFright.html',
        controller: 'stageFrightCtrl'
      }
    }
  })

  .state('tabsController.apprehensionWithTrembling', {
    url: '/page480',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithTrembling.html',
        controller: 'apprehensionWithTremblingCtrl'
      }
    }
  })

  .state('tabsController.apprehensionWithLackOfMemory2', {
    url: '/page467',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithLackOfMemory2.html',
        controller: 'apprehensionWithLackOfMemory2Ctrl'
      }
    }
  })

  .state('tabsController.apprehensionWithBelching2', {
    url: '/page464',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithBelching2.html',
        controller: 'apprehensionWithBelching2Ctrl'
      }
    }
  })

  .state('apprehensionImprovedByDistraction', {
    url: '/page462',
    templateUrl: 'templates/apprehensionImprovedByDistraction.html',
    controller: 'apprehensionImprovedByDistractionCtrl'
  })

  .state('tabsController.apprehensionLumpInTheThroat', {
    url: '/page466',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionLumpInTheThroat.html',
        controller: 'apprehensionLumpInTheThroatCtrl'
      }
    }
  })

  .state('tabsController.apprehensionHypersensitivityToStress', {
    url: '/page465',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionHypersensitivityToStress.html',
        controller: 'apprehensionHypersensitivityToStressCtrl'
      }
    }
  })

  .state('hairLossFromPhysicalOverexertionOrStressfulEmotions', {
    url: '/page270',
    templateUrl: 'templates/hairLossFromPhysicalOverexertionOrStressfulEmotions.html',
    controller: 'hairLossFromPhysicalOverexertionOrStressfulEmotionsCtrl'
  })

  .state('tabsController.athleteSFootWithItching', {
    url: '/page248',
    views: {
      'tab3': {
        templateUrl: 'templates/athleteSFootWithItching.html',
        controller: 'athleteSFootWithItchingCtrl'
      }
    }
  })

  .state('tabsController.athleteSFootWithOozing', {
    url: '/page249',
    views: {
      'tab3': {
        templateUrl: 'templates/athleteSFootWithOozing.html',
        controller: 'athleteSFootWithOozingCtrl'
      }
    }
  })

  .state('tabsController.feverWithProfuseSweating', {
    url: '/page105',
    views: {
      'tab3': {
        templateUrl: 'templates/feverWithProfuseSweating.html',
        controller: 'feverWithProfuseSweatingCtrl'
      }
    }
  })

  .state('tabsController.feverWithRestlessness', {
    url: '/page106',
    views: {
      'tab3': {
        templateUrl: 'templates/feverWithRestlessness.html',
        controller: 'feverWithRestlessnessCtrl'
      }
    }
  })

  .state('tabsController.coldOrFlu', {
    url: '/page72',
    views: {
      'tab3': {
        templateUrl: 'templates/coldOrFlu.html',
        controller: 'coldOrFluCtrl'
      }
    }
  })

  .state('tabsController.barkingCough', {
    url: '/page77',
    views: {
      'tab3': {
        templateUrl: 'templates/barkingCough.html',
        controller: 'barkingCoughCtrl'
      }
    }
  })

  .state('tabsController.chestCongestion', {
    url: '/page206',
    views: {
      'tab3': {
        templateUrl: 'templates/chestCongestion.html',
        controller: 'chestCongestionCtrl'
      }
    }
  })

  .state('tabsController.coughTriggeredByColdAir', {
    url: '/page78',
    views: {
      'tab3': {
        templateUrl: 'templates/coughTriggeredByColdAir.html',
        controller: 'coughTriggeredByColdAirCtrl'
      }
    }
  })

  .state('tabsController.fitfulCoughHypersalivation', {
    url: '/page85',
    views: {
      'tab3': {
        templateUrl: 'templates/fitfulCoughHypersalivation.html',
        controller: 'fitfulCoughHypersalivationCtrl'
      }
    }
  })

  .state('tabsController.hypersalivation', {
    url: '/page218',
    views: {
      'tab3': {
        templateUrl: 'templates/hypersalivation.html',
        controller: 'hypersalivationCtrl'
      }
    }
  })

  .state('tabsController.improvedByEating', {
    url: '/page219',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByEating.html',
        controller: 'improvedByEatingCtrl'
      }
    }
  })

  .state('tabsController.inBoats', {
    url: '/page380',
    views: {
      'tab3': {
        templateUrl: 'templates/inBoats.html',
        controller: 'inBoatsCtrl'
      }
    }
  })

  .state('tabsController.inThePassengerSeat', {
    url: '/page381',
    views: {
      'tab3': {
        templateUrl: 'templates/inThePassengerSeat.html',
        controller: 'inThePassengerSeatCtrl'
      }
    }
  })

  .state('tabsController.relievedByHeat', {
    url: '/page382',
    views: {
      'tab3': {
        templateUrl: 'templates/relievedByHeat.html',
        controller: 'relievedByHeatCtrl'
      }
    }
  })

  .state('relievedByHeat2', {
    url: '/page383',
    templateUrl: 'templates/relievedByHeat2.html',
    controller: 'relievedByHeat2Ctrl'
  })

  .state('tabsController.improvedByFreshAir', {
    url: '/page220',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByFreshAir.html',
        controller: 'improvedByFreshAirCtrl'
      }
    }
  })

  .state('tabsController.feelingIcyCold', {
    url: '/page373',
    views: {
      'tab3': {
        templateUrl: 'templates/feelingIcyCold.html',
        controller: 'feelingIcyColdCtrl'
      }
    }
  })

  .state('tabsController.inAirplanes', {
    url: '/page374',
    views: {
      'tab3': {
        templateUrl: 'templates/inAirplanes.html',
        controller: 'inAirplanesCtrl'
      }
    }
  })

  .state('tabsController.weakness', {
    url: '/page221',
    views: {
      'tab3': {
        templateUrl: 'templates/weakness.html',
        controller: 'weaknessCtrl'
      }
    }
  })

  .state('tabsController.withCleanTongue', {
    url: '/page222',
    views: {
      'tab3': {
        templateUrl: 'templates/withCleanTongue.html',
        controller: 'withCleanTongueCtrl'
      }
    }
  })

  .state('tabsController.withPainfulCramps', {
    url: '/page223',
    views: {
      'tab3': {
        templateUrl: 'templates/withPainfulCramps.html',
        controller: 'withPainfulCrampsCtrl'
      }
    }
  })

  .state('tabsController.bleedingGumsWithABadTasteInTheMouth', {
    url: '/page384',
    views: {
      'tab3': {
        templateUrl: 'templates/bleedingGumsWithABadTasteInTheMouth.html',
        controller: 'bleedingGumsWithABadTasteInTheMouthCtrl'
      }
    }
  })

  .state('tabsController.bleedingGumsOther', {
    url: '/page385',
    views: {
      'tab3': {
        templateUrl: 'templates/bleedingGumsOther.html',
        controller: 'bleedingGumsOtherCtrl'
      }
    }
  })

  .state('tabsController.toothExtraction', {
    url: '/page386',
    views: {
      'tab3': {
        templateUrl: 'templates/toothExtraction.html',
        controller: 'toothExtractionCtrl'
      }
    }
  })

  .state('tabsController.hiccupsAfterALargeMeal', {
    url: '/page192',
    views: {
      'tab3': {
        templateUrl: 'templates/hiccupsAfterALargeMeal.html',
        controller: 'hiccupsAfterALargeMealCtrl'
      }
    }
  })

  .state('tabsController.jetLagDrowsiness', {
    url: '/page202',
    views: {
      'tab3': {
        templateUrl: 'templates/jetLagDrowsiness.html',
        controller: 'jetLagDrowsinessCtrl'
      }
    }
  })

  .state('tabsController.jetLagMusclePain', {
    url: '/page203',
    views: {
      'tab3': {
        templateUrl: 'templates/jetLagMusclePain.html',
        controller: 'jetLagMusclePainCtrl'
      }
    }
  })

  .state('tabsController.jetLagSleepPatternDisturbances', {
    url: '/page204',
    views: {
      'tab3': {
        templateUrl: 'templates/jetLagSleepPatternDisturbances.html',
        controller: 'jetLagSleepPatternDisturbancesCtrl'
      }
    }
  })

  .state('tabsController.restlessSleep', {
    url: '/page479',
    views: {
      'tab3': {
        templateUrl: 'templates/restlessSleep.html',
        controller: 'restlessSleepCtrl'
      }
    }
  })

  .state('tabsController.jetLagOther', {
    url: '/page205',
    views: {
      'tab3': {
        templateUrl: 'templates/jetLagOther.html',
        controller: 'jetLagOtherCtrl'
      }
    }
  })

  .state('tabsController.hiccupsImprovedByDrinkingColdWater', {
    url: '/page193',
    views: {
      'tab3': {
        templateUrl: 'templates/hiccupsImprovedByDrinkingColdWater.html',
        controller: 'hiccupsImprovedByDrinkingColdWaterCtrl'
      }
    }
  })

  .state('tabsController.hiccupsPainful', {
    url: '/page194',
    views: {
      'tab3': {
        templateUrl: 'templates/hiccupsPainful.html',
        controller: 'hiccupsPainfulCtrl'
      }
    }
  })

  .state('tabsController.hiccupsTriggeredByStress', {
    url: '/page195',
    views: {
      'tab3': {
        templateUrl: 'templates/hiccupsTriggeredByStress.html',
        controller: 'hiccupsTriggeredByStressCtrl'
      }
    }
  })

  .state('tabsController.indigestionImprovedByWarmApplicationsToTheAbdomen', {
    url: '/page197',
    views: {
      'tab3': {
        templateUrl: 'templates/indigestionImprovedByWarmApplicationsToTheAbdomen.html',
        controller: 'indigestionImprovedByWarmApplicationsToTheAbdomenCtrl'
      }
    }
  })

  .state('tabsController.indigestionWhiteCoveredTongue', {
    url: '/page198',
    views: {
      'tab3': {
        templateUrl: 'templates/indigestionWhiteCoveredTongue.html',
        controller: 'indigestionWhiteCoveredTongueCtrl'
      }
    }
  })

  .state('tabsController.headacheFromIndigestion', {
    url: '/page436',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromIndigestion.html',
        controller: 'headacheFromIndigestionCtrl'
      }
    }
  })

  .state('tabsController.indigestionWithPainInTheGallbladderArea', {
    url: '/page199',
    views: {
      'tab3': {
        templateUrl: 'templates/indigestionWithPainInTheGallbladderArea.html',
        controller: 'indigestionWithPainInTheGallbladderAreaCtrl'
      }
    }
  })

  .state('tabsController.indigestionWithPainUnderTheRightShoulder', {
    url: '/page200',
    views: {
      'tab3': {
        templateUrl: 'templates/indigestionWithPainUnderTheRightShoulder.html',
        controller: 'indigestionWithPainUnderTheRightShoulderCtrl'
      }
    }
  })

  .state('tabsController.fitfulCoughWithNausea', {
    url: '/page86',
    views: {
      'tab3': {
        templateUrl: 'templates/fitfulCoughWithNausea.html',
        controller: 'fitfulCoughWithNauseaCtrl'
      }
    }
  })

  .state('tabsController.coughWorseAtNight', {
    url: '/page79',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorseAtNight.html',
        controller: 'coughWorseAtNightCtrl'
      }
    }
  })

  .state('tabsController.coughWorseInBed', {
    url: '/page80',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorseInBed.html',
        controller: 'coughWorseInBedCtrl'
      }
    }
  })

  .state('tabsController.hoarsenessFromVoiceExertion', {
    url: '/page88',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessFromVoiceExertion.html',
        controller: 'hoarsenessFromVoiceExertionCtrl'
      }
    }
  })

  .state('tabsController.hoarsenessWhenStartingToSpeak', {
    url: '/page89',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessWhenStartingToSpeak.html',
        controller: 'hoarsenessWhenStartingToSpeakCtrl'
      }
    }
  })

  .state('tabsController.hoarsenessWithBitonalVoice', {
    url: '/page90',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessWithBitonalVoice.html',
        controller: 'hoarsenessWithBitonalVoiceCtrl'
      }
    }
  })

  .state('tabsController.hoarsenessWithCroupyCough', {
    url: '/page91',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessWithCroupyCough.html',
        controller: 'hoarsenessWithCroupyCoughCtrl'
      }
    }
  })

  .state('tabsController.hoarsenessWorseWithHumidity', {
    url: '/page92',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessWorseWithHumidity.html',
        controller: 'hoarsenessWorseWithHumidityCtrl'
      }
    }
  })

  .state('tabsController.lossOfVoice', {
    url: '/page207',
    views: {
      'tab3': {
        templateUrl: 'templates/lossOfVoice.html',
        controller: 'lossOfVoiceCtrl'
      }
    }
  })

  .state('tabsController.coughWorseWhenSpeaking', {
    url: '/page81',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorseWhenSpeaking.html',
        controller: 'coughWorseWhenSpeakingCtrl'
      }
    }
  })

  .state('tabsController.coldSoresCrustStage2', {
    url: '/page149',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresCrustStage2.html',
        controller: 'coldSoresCrustStage2Ctrl'
      }
    }
  })

  .state('tabsController.coldSoresOnset2', {
    url: '/page150',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresOnset2.html',
        controller: 'coldSoresOnset2Ctrl'
      }
    }
  })

  .state('tabsController.coldSoresSmallBlisters2', {
    url: '/page151',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresSmallBlisters2.html',
        controller: 'coldSoresSmallBlisters2Ctrl'
      }
    }
  })

  .state('tabsController.coughWorseWithMotion', {
    url: '/page82',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorseWithMotion.html',
        controller: 'coughWorseWithMotionCtrl'
      }
    }
  })

  .state('tabsController.coughWorsenedByCold', {
    url: '/page83',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorsenedByCold.html',
        controller: 'coughWorsenedByColdCtrl'
      }
    }
  })

  .state('wetCoughDifficultToExpectorate', {
    url: '/page517',
    templateUrl: 'templates/wetCoughDifficultToExpectorate.html',
    controller: 'wetCoughDifficultToExpectorateCtrl'
  })

  .state('wetCoughWorseWhenLyingDown', {
    url: '/page521',
    templateUrl: 'templates/wetCoughWorseWhenLyingDown.html',
    controller: 'wetCoughWorseWhenLyingDownCtrl'
  })

  .state('wetCoughThickPhlegm', {
    url: '/page518',
    templateUrl: 'templates/wetCoughThickPhlegm.html',
    controller: 'wetCoughThickPhlegmCtrl'
  })

  .state('wetCoughWithBronchialIrritation', {
    url: '/page519',
    templateUrl: 'templates/wetCoughWithBronchialIrritation.html',
    controller: 'wetCoughWithBronchialIrritationCtrl'
  })

  .state('wetCoughWorseWhenInBed', {
    url: '/page520',
    templateUrl: 'templates/wetCoughWorseWhenInBed.html',
    controller: 'wetCoughWorseWhenInBedCtrl'
  })

  .state('tabsController.chills', {
    url: '/page74',
    views: {
      'tab3': {
        templateUrl: 'templates/chills.html',
        controller: 'chillsCtrl'
      }
    }
  })

  .state('tabsController.eyeIrritation', {
    url: '/page14',
    views: {
      'tab3': {
        templateUrl: 'templates/eyeIrritation.html',
        controller: 'eyeIrritationCtrl'
      }
    }
  })

  .state('tabsController.eyeIrritationFromAllergies', {
    url: '/page236',
    views: {
      'tab3': {
        templateUrl: 'templates/eyeIrritationFromAllergies.html',
        controller: 'eyeIrritationFromAllergiesCtrl'
      }
    }
  })

  .state('tabsController.eyeIrritationNotFromAllergies', {
    url: '/page237',
    views: {
      'tab3': {
        templateUrl: 'templates/eyeIrritationNotFromAllergies.html',
        controller: 'eyeIrritationNotFromAllergiesCtrl'
      }
    }
  })

  .state('tabsController.chalazionSmallBumpOnTheEyelid', {
    url: '/page244',
    views: {
      'tab3': {
        templateUrl: 'templates/chalazionSmallBumpOnTheEyelid.html',
        controller: 'chalazionSmallBumpOnTheEyelidCtrl'
      }
    }
  })

  .state('tabsController.dryEyes', {
    url: '/page245',
    views: {
      'tab3': {
        templateUrl: 'templates/dryEyes.html',
        controller: 'dryEyesCtrl'
      }
    }
  })

  .state('tabsController.strainedEyesFromArtificialLight', {
    url: '/page238',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyesFromArtificialLight.html',
        controller: 'strainedEyesFromArtificialLightCtrl'
      }
    }
  })

  .state('tabsController.strainedEyesFromComputerUse', {
    url: '/page239',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyesFromComputerUse.html',
        controller: 'strainedEyesFromComputerUseCtrl'
      }
    }
  })

  .state('tabsController.strainedEyesFromOverexertedVisualEffort', {
    url: '/page240',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyesFromOverexertedVisualEffort.html',
        controller: 'strainedEyesFromOverexertedVisualEffortCtrl'
      }
    }
  })

  .state('tabsController.strainedEyesFromPoorLighting', {
    url: '/page241',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyesFromPoorLighting.html',
        controller: 'strainedEyesFromPoorLightingCtrl'
      }
    }
  })

  .state('tabsController.styeOnUpperEyelid', {
    url: '/page242',
    views: {
      'tab3': {
        templateUrl: 'templates/styeOnUpperEyelid.html',
        controller: 'styeOnUpperEyelidCtrl'
      }
    }
  })

  .state('tabsController.styeRecurrent', {
    url: '/page243',
    views: {
      'tab3': {
        templateUrl: 'templates/styeRecurrent.html',
        controller: 'styeRecurrentCtrl'
      }
    }
  })

  .state('tabsController.sunAllergyBeforeExposure2', {
    url: '/page27',
    views: {
      'tab3': {
        templateUrl: 'templates/sunAllergyBeforeExposure2.html',
        controller: 'sunAllergyBeforeExposure2Ctrl'
      }
    }
  })

  .state('tabsController.sunAllergyAfterExposure', {
    url: '/page19',
    views: {
      'tab3': {
        templateUrl: 'templates/sunAllergyAfterExposure.html',
        controller: 'sunAllergyAfterExposureCtrl'
      }
    }
  })

  .state('tabsController.hayFever', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/hayFever.html',
        controller: 'hayFeverCtrl'
      }
    }
  })

  .state('tabsController.hives', {
    url: '/page22',
    views: {
      'tab3': {
        templateUrl: 'templates/hives.html',
        controller: 'hivesCtrl'
      }
    }
  })

  .state('tabsController.legCrampsAtNight', {
    url: '/page353',
    views: {
      'tab3': {
        templateUrl: 'templates/legCrampsAtNight.html',
        controller: 'legCrampsAtNightCtrl'
      }
    }
  })

  .state('tabsController.jointAndMusclePainsRestlessLegs', {
    url: '/page365',
    views: {
      'tab3': {
        templateUrl: 'templates/jointAndMusclePainsRestlessLegs.html',
        controller: 'jointAndMusclePainsRestlessLegsCtrl'
      }
    }
  })

  .state('tabsController.legCrampsFromOverexertion', {
    url: '/page354',
    views: {
      'tab3': {
        templateUrl: 'templates/legCrampsFromOverexertion.html',
        controller: 'legCrampsFromOverexertionCtrl'
      }
    }
  })

  .state('tabsController.muscleOverexertion', {
    url: '/page360',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleOverexertion.html',
        controller: 'muscleOverexertionCtrl'
      }
    }
  })

  .state('tabsController.muscleStiffnessFromOverexertion', {
    url: '/page368',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessFromOverexertion.html',
        controller: 'muscleStiffnessFromOverexertionCtrl'
      }
    }
  })

  .state('tabsController.muscleSorenessImprovedByFirmPressure', {
    url: '/page361',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleSorenessImprovedByFirmPressure.html',
        controller: 'muscleSorenessImprovedByFirmPressureCtrl'
      }
    }
  })

  .state('muscleSorenessImprovedByFirmPressure2', {
    url: '/page362',
    templateUrl: 'templates/muscleSorenessImprovedByFirmPressure2.html',
    controller: 'muscleSorenessImprovedByFirmPressure2Ctrl'
  })

  .state('tabsController.lowerBackPainFeelingOfWeaknessInTheLowerBack', {
    url: '/page356',
    views: {
      'tab3': {
        templateUrl: 'templates/lowerBackPainFeelingOfWeaknessInTheLowerBack.html',
        controller: 'lowerBackPainFeelingOfWeaknessInTheLowerBackCtrl'
      }
    }
  })

  .state('tabsController.lowerBackPainWithShootingPain', {
    url: '/page357',
    views: {
      'tab3': {
        templateUrl: 'templates/lowerBackPainWithShootingPain.html',
        controller: 'lowerBackPainWithShootingPainCtrl'
      }
    }
  })

  .state('tabsController.lowerBackPainWorseWithRest', {
    url: '/page358',
    views: {
      'tab3': {
        templateUrl: 'templates/lowerBackPainWorseWithRest.html',
        controller: 'lowerBackPainWorseWithRestCtrl'
      }
    }
  })

  .state('tabsController.muscleSorenessFromMinorTrauma', {
    url: '/page359',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleSorenessFromMinorTrauma.html',
        controller: 'muscleSorenessFromMinorTraumaCtrl'
      }
    }
  })

  .state('tabsController.muscleSorenessMusicianCramps', {
    url: '/page364',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleSorenessMusicianCramps.html',
        controller: 'muscleSorenessMusicianCrampsCtrl'
      }
    }
  })

  .state('tabsController.sprainsRepeatedSprains', {
    url: '/page366',
    views: {
      'tab3': {
        templateUrl: 'templates/sprainsRepeatedSprains.html',
        controller: 'sprainsRepeatedSprainsCtrl'
      }
    }
  })

  .state('sprainsLongTermTreatment', {
    url: '/page449',
    templateUrl: 'templates/sprainsLongTermTreatment.html',
    controller: 'sprainsLongTermTreatmentCtrl'
  })

  .state('sprainsFirst48Hours', {
    url: '/page448',
    templateUrl: 'templates/sprainsFirst48Hours.html',
    controller: 'sprainsFirst48HoursCtrl'
  })

  .state('tabsController.muscleStiffnessFromTrauma', {
    url: '/page372',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessFromTrauma.html',
        controller: 'muscleStiffnessFromTraumaCtrl'
      }
    }
  })

  .state('tabsController.muscleStiffnessImprovedByHeat', {
    url: '/page375',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessImprovedByHeat.html',
        controller: 'muscleStiffnessImprovedByHeatCtrl'
      }
    }
  })

  .state('tabsController.arnicareRollOn', {
    url: '/page510',
    views: {
      'tab4': {
        templateUrl: 'templates/arnicareRollOn.html',
        controller: 'arnicareRollOnCtrl'
      }
    }
  })

  .state('tabsController.arnicareLegCramps', {
    url: '/page511',
    views: {
      'tab4': {
        templateUrl: 'templates/arnicareLegCramps.html',
        controller: 'arnicareLegCrampsCtrl'
      }
    }
  })

  .state('tabsController.arnicareFootCare', {
    url: '/page512',
    views: {
      'tab4': {
        templateUrl: 'templates/arnicareFootCare.html',
        controller: 'arnicareFootCareCtrl'
      }
    }
  })

  .state('tabsController.colicComfortLiquidDoses', {
    url: '/page277',
    views: {
      'tab4': {
        templateUrl: 'templates/colicComfortLiquidDoses.html',
        controller: 'colicComfortLiquidDosesCtrl'
      }
    }
  })

  .state('tabsController.rhinAllergyTablets', {
    url: '/page513',
    views: {
      'tab4': {
        templateUrl: 'templates/rhinAllergyTablets.html',
        controller: 'rhinAllergyTabletsCtrl'
      }
    }
  })

  .state('tabsController.rhinAllergyKidsTablets', {
    url: '/page514',
    views: {
      'tab4': {
        templateUrl: 'templates/rhinAllergyKidsTablets.html',
        controller: 'rhinAllergyKidsTabletsCtrl'
      }
    }
  })

  .state('tabsController.rhinAllergyKidsPellets', {
    url: '/page515',
    views: {
      'tab4': {
        templateUrl: 'templates/rhinAllergyKidsPellets.html',
        controller: 'rhinAllergyKidsPelletsCtrl'
      }
    }
  })

  .state('tabsController.muscleStiffnessImprovedByMotion', {
    url: '/page376',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessImprovedByMotion.html',
        controller: 'muscleStiffnessImprovedByMotionCtrl'
      }
    }
  })

  .state('tabsController.muscleStiffnessWorseWithMotion', {
    url: '/page377',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessWorseWithMotion.html',
        controller: 'muscleStiffnessWorseWithMotionCtrl'
      }
    }
  })

  .state('tabsController.writerSCrampWithMuscularWeakness', {
    url: '/page378',
    views: {
      'tab3': {
        templateUrl: 'templates/writerSCrampWithMuscularWeakness.html',
        controller: 'writerSCrampWithMuscularWeaknessCtrl'
      }
    }
  })

  .state('tabsController.writerSCrampWithShootingPain', {
    url: '/page379',
    views: {
      'tab3': {
        templateUrl: 'templates/writerSCrampWithShootingPain.html',
        controller: 'writerSCrampWithShootingPainCtrl'
      }
    }
  })

  .state('tabsController.muscleStiffnessFromPhysicalTherapy', {
    url: '/page370',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessFromPhysicalTherapy.html',
        controller: 'muscleStiffnessFromPhysicalTherapyCtrl'
      }
    }
  })

  .state('tabsController.sprainsNoneOfTheAbove', {
    url: '/page367',
    views: {
      'tab3': {
        templateUrl: 'templates/sprainsNoneOfTheAbove.html',
        controller: 'sprainsNoneOfTheAboveCtrl'
      }
    }
  })

  .state('tabsController.legPains', {
    url: '/page355',
    views: {
      'tab3': {
        templateUrl: 'templates/legPains.html',
        controller: 'legPainsCtrl'
      }
    }
  })

  .state('tabsController.weals', {
    url: '/page28',
    views: {
      'tab3': {
        templateUrl: 'templates/weals.html',
        controller: 'wealsCtrl'
      }
    }
  })

  .state('tabsController.sinusCongestion', {
    url: '/page23',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusCongestion.html',
        controller: 'sinusCongestionCtrl'
      }
    }
  })

  .state('tabsController.sinusPainPainAtBaseOfNose', {
    url: '/page122',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusPainPainAtBaseOfNose.html',
        controller: 'sinusPainPainAtBaseOfNoseCtrl'
      }
    }
  })

  .state('tabsController.sinusPainPainInTheUpperJaw', {
    url: '/page123',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusPainPainInTheUpperJaw.html',
        controller: 'sinusPainPainInTheUpperJawCtrl'
      }
    }
  })

  .state('tabsController.sinusPainWithThickGreenishDischarge', {
    url: '/page124',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusPainWithThickGreenishDischarge.html',
        controller: 'sinusPainWithThickGreenishDischargeCtrl'
      }
    }
  })

  .state('tabsController.sinusPainOther', {
    url: '/page125',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusPainOther.html',
        controller: 'sinusPainOtherCtrl'
      }
    }
  })

  .state('tabsController.nasalCongestionFromAllergies', {
    url: '/page15',
    views: {
      'tab3': {
        templateUrl: 'templates/nasalCongestionFromAllergies.html',
        controller: 'nasalCongestionFromAllergiesCtrl'
      }
    }
  })

  .state('tabsController.bleedingEasily', {
    url: '/page65',
    views: {
      'tab3': {
        templateUrl: 'templates/bleedingEasily.html',
        controller: 'bleedingEasilyCtrl'
      }
    }
  })

  .state('burningWithFissures', {
    url: '/page66',
    templateUrl: 'templates/burningWithFissures.html',
    controller: 'burningWithFissuresCtrl'
  })

  .state('tabsController.constipationWithHemorrhoids', {
    url: '/page158',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithHemorrhoids.html',
        controller: 'constipationWithHemorrhoidsCtrl'
      }
    }
  })

  .state('tabsController.itching', {
    url: '/page68',
    views: {
      'tab3': {
        templateUrl: 'templates/itching.html',
        controller: 'itchingCtrl'
      }
    }
  })

  .state('tabsController.veryLittleOrNoBleeding', {
    url: '/page69',
    views: {
      'tab3': {
        templateUrl: 'templates/veryLittleOrNoBleeding.html',
        controller: 'veryLittleOrNoBleedingCtrl'
      }
    }
  })

  .state('tabsController.otherHemorrhoidMedicines', {
    url: '/page70',
    views: {
      'tab3': {
        templateUrl: 'templates/otherHemorrhoidMedicines.html',
        controller: 'otherHemorrhoidMedicinesCtrl'
      }
    }
  })

  .state('tabsController.burningWithFissures2', {
    url: '/page67',
    views: {
      'tab3': {
        templateUrl: 'templates/burningWithFissures2.html',
        controller: 'burningWithFissures2Ctrl'
      }
    }
  })

  .state('tabsController.itchyNose', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/itchyNose.html',
        controller: 'itchyNoseCtrl'
      }
    }
  })

  .state('tabsController.associatedWithHotFlashes', {
    url: '/page48',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithHotFlashes.html',
        controller: 'associatedWithHotFlashesCtrl'
      }
    }
  })

  .state('tabsController.headacheFromHotFlashes', {
    url: '/page437',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromHotFlashes.html',
        controller: 'headacheFromHotFlashesCtrl'
      }
    }
  })

  .state('tabsController.associatedWithHotFlashes2', {
    url: '/page483',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithHotFlashes2.html',
        controller: 'associatedWithHotFlashes2Ctrl'
      }
    }
  })

  .state('tabsController.profuseSweatingAssociatedWithHotFlashes', {
    url: '/page500',
    views: {
      'tab3': {
        templateUrl: 'templates/profuseSweatingAssociatedWithHotFlashes.html',
        controller: 'profuseSweatingAssociatedWithHotFlashesCtrl'
      }
    }
  })

  .state('tabsController.profuseSweatingAssociatedWithMenopause', {
    url: '/page501',
    views: {
      'tab3': {
        templateUrl: 'templates/profuseSweatingAssociatedWithMenopause.html',
        controller: 'profuseSweatingAssociatedWithMenopauseCtrl'
      }
    }
  })

  .state('tabsController.nightSweats', {
    url: '/page496',
    views: {
      'tab3': {
        templateUrl: 'templates/nightSweats.html',
        controller: 'nightSweatsCtrl'
      }
    }
  })

  .state('tabsController.hotFlashes', {
    url: '/page494',
    views: {
      'tab3': {
        templateUrl: 'templates/hotFlashes.html',
        controller: 'hotFlashesCtrl'
      }
    }
  })

  .state('tabsController.irritability', {
    url: '/page495',
    views: {
      'tab3': {
        templateUrl: 'templates/irritability.html',
        controller: 'irritabilityCtrl'
      }
    }
  })

  .state('tabsController.associatedWithNightSweats', {
    url: '/page487',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithNightSweats.html',
        controller: 'associatedWithNightSweatsCtrl'
      }
    }
  })

  .state('tabsController.yeastInfection', {
    url: '/page502',
    views: {
      'tab3': {
        templateUrl: 'templates/yeastInfection.html',
        controller: 'yeastInfectionCtrl'
      }
    }
  })

  .state('tabsController.menstrualCrampsAtTheOnsetOfPeriods', {
    url: '/page488',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsAtTheOnsetOfPeriods.html',
        controller: 'menstrualCrampsAtTheOnsetOfPeriodsCtrl'
      }
    }
  })

  .state('menstrualCrampsImprovedByBendingOver', {
    url: '/page489',
    templateUrl: 'templates/menstrualCrampsImprovedByBendingOver.html',
    controller: 'menstrualCrampsImprovedByBendingOverCtrl'
  })

  .state('premenstrualSyndromeWithMoodSwings', {
    url: '/page497',
    templateUrl: 'templates/premenstrualSyndromeWithMoodSwings.html',
    controller: 'premenstrualSyndromeWithMoodSwingsCtrl'
  })

  .state('premenstrualSyndromeWorseWithCold', {
    url: '/page498',
    templateUrl: 'templates/premenstrualSyndromeWorseWithCold.html',
    controller: 'premenstrualSyndromeWorseWithColdCtrl'
  })

  .state('premenstrualSyndromeOther', {
    url: '/page499',
    templateUrl: 'templates/premenstrualSyndromeOther.html',
    controller: 'premenstrualSyndromeOtherCtrl'
  })

  .state('tabsController.menstrualCrampsWorseWithAnger', {
    url: '/page492',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsWorseWithAnger.html',
        controller: 'menstrualCrampsWorseWithAngerCtrl'
      }
    }
  })

  .state('tabsController.menstrualCrampsOther', {
    url: '/page493',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsOther.html',
        controller: 'menstrualCrampsOtherCtrl'
      }
    }
  })

  .state('tabsController.menstrualCrampsRelievedByStrongPressure', {
    url: '/page490',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsRelievedByStrongPressure.html',
        controller: 'menstrualCrampsRelievedByStrongPressureCtrl'
      }
    }
  })

  .state('tabsController.menstrualCrampsWithHeavyMenstruation', {
    url: '/page491',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsWithHeavyMenstruation.html',
        controller: 'menstrualCrampsWithHeavyMenstruationCtrl'
      }
    }
  })

  .state('tabsController.associatedWithMenopause', {
    url: '/page484',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithMenopause.html',
        controller: 'associatedWithMenopauseCtrl'
      }
    }
  })

  .state('tabsController.associatedWithPMS', {
    url: '/page49',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithPMS.html',
        controller: 'associatedWithPMSCtrl'
      }
    }
  })

  .state('tabsController.fromGriefAngerOrVexation2', {
    url: '/page50',
    views: {
      'tab3': {
        templateUrl: 'templates/fromGriefAngerOrVexation2.html',
        controller: 'fromGriefAngerOrVexation2Ctrl'
      }
    }
  })

  .state('tabsController.fromIntellectualOverwork', {
    url: '/page51',
    views: {
      'tab3': {
        templateUrl: 'templates/fromIntellectualOverwork.html',
        controller: 'fromIntellectualOverworkCtrl'
      }
    }
  })

  .state('tabsController.headacheFromIntellectualOverwork', {
    url: '/page438',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromIntellectualOverwork.html',
        controller: 'headacheFromIntellectualOverworkCtrl'
      }
    }
  })

  .state('tabsController.fromMuscularOverexertion', {
    url: '/page52',
    views: {
      'tab3': {
        templateUrl: 'templates/fromMuscularOverexertion.html',
        controller: 'fromMuscularOverexertionCtrl'
      }
    }
  })

  .state('tabsController.wakingUpMidSleep', {
    url: '/page53',
    views: {
      'tab3': {
        templateUrl: 'templates/wakingUpMidSleep.html',
        controller: 'wakingUpMidSleepCtrl'
      }
    }
  })

  .state('tabsController.bruisingEasily', {
    url: '/page61',
    views: {
      'tab3': {
        templateUrl: 'templates/bruisingEasily.html',
        controller: 'bruisingEasilyCtrl'
      }
    }
  })

  .state('tabsController.bruising', {
    url: '/page397',
    views: {
      'tab3': {
        templateUrl: 'templates/bruising.html',
        controller: 'bruisingCtrl'
      }
    }
  })

  .state('tabsController.strainedMuscle', {
    url: '/page450',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedMuscle.html',
        controller: 'strainedMuscleCtrl'
      }
    }
  })

  .state('tabsController.surgeryPostSurgery', {
    url: '/page451',
    views: {
      'tab3': {
        templateUrl: 'templates/surgeryPostSurgery.html',
        controller: 'surgeryPostSurgeryCtrl'
      }
    }
  })

  .state('tabsController.surgeryPreSurgery', {
    url: '/page452',
    views: {
      'tab3': {
        templateUrl: 'templates/surgeryPreSurgery.html',
        controller: 'surgeryPreSurgeryCtrl'
      }
    }
  })

  .state('tabsController.blackEye', {
    url: '/page233',
    views: {
      'tab3': {
        templateUrl: 'templates/blackEye.html',
        controller: 'blackEyeCtrl'
      }
    }
  })

  .state('tabsController.breastTrauma', {
    url: '/page398',
    views: {
      'tab3': {
        templateUrl: 'templates/breastTrauma.html',
        controller: 'breastTraumaCtrl'
      }
    }
  })

  .state('tabsController.improvedByMovingTheLimb', {
    url: '/page430',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByMovingTheLimb.html',
        controller: 'improvedByMovingTheLimbCtrl'
      }
    }
  })

  .state('tabsController.worsenedByMovingTheLimb', {
    url: '/page431',
    views: {
      'tab3': {
        templateUrl: 'templates/worsenedByMovingTheLimb.html',
        controller: 'worsenedByMovingTheLimbCtrl'
      }
    }
  })

  .state('tabsController.torticollisWryNeck', {
    url: '/page453',
    views: {
      'tab3': {
        templateUrl: 'templates/torticollisWryNeck.html',
        controller: 'torticollisWryNeckCtrl'
      }
    }
  })

  .state('tabsController.withStiffJoints', {
    url: '/page344',
    views: {
      'tab3': {
        templateUrl: 'templates/withStiffJoints.html',
        controller: 'withStiffJointsCtrl'
      }
    }
  })

  .state('tabsController.withSwollenJointsItchingPain', {
    url: '/page345',
    views: {
      'tab3': {
        templateUrl: 'templates/withSwollenJointsItchingPain.html',
        controller: 'withSwollenJointsItchingPainCtrl'
      }
    }
  })

  .state('tabsController.crampsInTheNeck', {
    url: '/page347',
    views: {
      'tab3': {
        templateUrl: 'templates/crampsInTheNeck.html',
        controller: 'crampsInTheNeckCtrl'
      }
    }
  })

  .state('tabsController.improvedByFirmPressure', {
    url: '/page348',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByFirmPressure.html',
        controller: 'improvedByFirmPressureCtrl'
      }
    }
  })

  .state('tabsController.improvedByMotion', {
    url: '/page349',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByMotion.html',
        controller: 'improvedByMotionCtrl'
      }
    }
  })

  .state('tabsController.worseWithMotion', {
    url: '/page363',
    views: {
      'tab3': {
        templateUrl: 'templates/worseWithMotion.html',
        controller: 'worseWithMotionCtrl'
      }
    }
  })

  .state('tabsController.inFingers', {
    url: '/page350',
    views: {
      'tab3': {
        templateUrl: 'templates/inFingers.html',
        controller: 'inFingersCtrl'
      }
    }
  })

  .state('tabsController.triggeredByDampnessAndCold', {
    url: '/page351',
    views: {
      'tab3': {
        templateUrl: 'templates/triggeredByDampnessAndCold.html',
        controller: 'triggeredByDampnessAndColdCtrl'
      }
    }
  })

  .state('tabsController.jointPainWorseWithMotion', {
    url: '/page352',
    views: {
      'tab3': {
        templateUrl: 'templates/jointPainWorseWithMotion.html',
        controller: 'jointPainWorseWithMotionCtrl'
      }
    }
  })

  .state('tabsController.arthritisPainOther', {
    url: '/page346',
    views: {
      'tab3': {
        templateUrl: 'templates/arthritisPainOther.html',
        controller: 'arthritisPainOtherCtrl'
      }
    }
  })

  .state('arthritisPainOther2', {
    url: '/page509',
    templateUrl: 'templates/arthritisPainOther2.html',
    controller: 'arthritisPainOther2Ctrl'
  })

  .state('overexertion', {
    url: '/page73',
    templateUrl: 'templates/overexertion.html',
    controller: 'overexertionCtrl'
  })

  .state('tabsController.withVaricoseVeins', {
    url: '/page62',
    views: {
      'tab3': {
        templateUrl: 'templates/withVaricoseVeins.html',
        controller: 'withVaricoseVeinsCtrl'
      }
    }
  })

  .state('tabsController.otherLegMedicines', {
    url: '/page63',
    views: {
      'tab3': {
        templateUrl: 'templates/otherLegMedicines.html',
        controller: 'otherLegMedicinesCtrl'
      }
    }
  })

  .state('tabsController.influxOfThoughts', {
    url: '/page54',
    views: {
      'tab3': {
        templateUrl: 'templates/influxOfThoughts.html',
        controller: 'influxOfThoughtsCtrl'
      }
    }
  })

  .state('tabsController.withFearOfDarkness', {
    url: '/page55',
    views: {
      'tab3': {
        templateUrl: 'templates/withFearOfDarkness.html',
        controller: 'withFearOfDarknessCtrl'
      }
    }
  })

  .state('tabsController.constipationWhileTraveling', {
    url: '/page154',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWhileTraveling.html',
        controller: 'constipationWhileTravelingCtrl'
      }
    }
  })

  .state('tabsController.overindulgence', {
    url: '/page209',
    views: {
      'tab3': {
        templateUrl: 'templates/overindulgence.html',
        controller: 'overindulgenceCtrl'
      }
    }
  })

  .state('tabsController.morningSickness', {
    url: '/page482',
    views: {
      'tab3': {
        templateUrl: 'templates/morningSickness.html',
        controller: 'morningSicknessCtrl'
      }
    }
  })

  .state('tabsController.heavyMenstruationWithBloodClots', {
    url: '/page485',
    views: {
      'tab3': {
        templateUrl: 'templates/heavyMenstruationWithBloodClots.html',
        controller: 'heavyMenstruationWithBloodClotsCtrl'
      }
    }
  })

  .state('tabsController.heavyMenstruationWithNausea', {
    url: '/page486',
    views: {
      'tab3': {
        templateUrl: 'templates/heavyMenstruationWithNausea.html',
        controller: 'heavyMenstruationWithNauseaCtrl'
      }
    }
  })

  .state('tabsController.stopSmokingIrritability', {
    url: '/page454',
    views: {
      'tab3': {
        templateUrl: 'templates/stopSmokingIrritability.html',
        controller: 'stopSmokingIrritabilityCtrl'
      }
    }
  })

  .state('tabsController.stopSmokingNeedToEat', {
    url: '/page455',
    views: {
      'tab3': {
        templateUrl: 'templates/stopSmokingNeedToEat.html',
        controller: 'stopSmokingNeedToEatCtrl'
      }
    }
  })

  .state('tabsController.stopSmokingTobaccoCraving', {
    url: '/page456',
    views: {
      'tab3': {
        templateUrl: 'templates/stopSmokingTobaccoCraving.html',
        controller: 'stopSmokingTobaccoCravingCtrl'
      }
    }
  })

  .state('tabsController.headacheInTheForeheadWithHeartburn', {
    url: '/page440',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheInTheForeheadWithHeartburn.html',
        controller: 'headacheInTheForeheadWithHeartburnCtrl'
      }
    }
  })

  .state('tabsController.headachePeriodicallyWeekends', {
    url: '/page441',
    views: {
      'tab3': {
        templateUrl: 'templates/headachePeriodicallyWeekends.html',
        controller: 'headachePeriodicallyWeekendsCtrl'
      }
    }
  })

  .state('tabsController.headacheThrobbingHeadaches', {
    url: '/page442',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheThrobbingHeadaches.html',
        controller: 'headacheThrobbingHeadachesCtrl'
      }
    }
  })

  .state('tabsController.headacheWithNausea', {
    url: '/page443',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheWithNausea.html',
        controller: 'headacheWithNauseaCtrl'
      }
    }
  })

  .state('tabsController.headacheWithOveractiveThoughts', {
    url: '/page444',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheWithOveractiveThoughts.html',
        controller: 'headacheWithOveractiveThoughtsCtrl'
      }
    }
  })

  .state('tabsController.headacheWithSensitivityToLightAndNoise', {
    url: '/page445',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheWithSensitivityToLightAndNoise.html',
        controller: 'headacheWithSensitivityToLightAndNoiseCtrl'
      }
    }
  })

  .state('tabsController.stomachFlu', {
    url: '/page227',
    views: {
      'tab3': {
        templateUrl: 'templates/stomachFlu.html',
        controller: 'stomachFluCtrl'
      }
    }
  })

  .state('tabsController.toothaches', {
    url: '/page228',
    views: {
      'tab3': {
        templateUrl: 'templates/toothaches.html',
        controller: 'toothachesCtrl'
      }
    }
  })

  .state('tabsController.fromSweets', {
    url: '/page216',
    views: {
      'tab3': {
        templateUrl: 'templates/fromSweets.html',
        controller: 'fromSweetsCtrl'
      }
    }
  })

  .state('tabsController.fromTobaccoSmoke', {
    url: '/page217',
    views: {
      'tab3': {
        templateUrl: 'templates/fromTobaccoSmoke.html',
        controller: 'fromTobaccoSmokeCtrl'
      }
    }
  })

  .state('tabsController.snoringFromPostnasalDrip', {
    url: '/page210',
    views: {
      'tab3': {
        templateUrl: 'templates/snoringFromPostnasalDrip.html',
        controller: 'snoringFromPostnasalDripCtrl'
      }
    }
  })

  .state('tabsController.snoringOther', {
    url: '/page211',
    views: {
      'tab3': {
        templateUrl: 'templates/snoringOther.html',
        controller: 'snoringOtherCtrl'
      }
    }
  })

  .state('tabsController.digestiveCrampsImprovedByPressure', {
    url: '/page172',
    views: {
      'tab3': {
        templateUrl: 'templates/digestiveCrampsImprovedByPressure.html',
        controller: 'digestiveCrampsImprovedByPressureCtrl'
      }
    }
  })

  .state('tabsController.foodIntoleranceBeer', {
    url: '/page173',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceBeer.html',
        controller: 'foodIntoleranceBeerCtrl'
      }
    }
  })

  .state('tabsController.foodIntoleranceCabbageSauerkraut', {
    url: '/page174',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceCabbageSauerkraut.html',
        controller: 'foodIntoleranceCabbageSauerkrautCtrl'
      }
    }
  })

  .state('tabsController.curedMeat', {
    url: '/page175',
    views: {
      'tab3': {
        templateUrl: 'templates/curedMeat.html',
        controller: 'curedMeatCtrl'
      }
    }
  })

  .state('tabsController.foodIntoleranceFattyFood', {
    url: '/page176',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceFattyFood.html',
        controller: 'foodIntoleranceFattyFoodCtrl'
      }
    }
  })

  .state('tabsController.foodIntoleranceGarlic', {
    url: '/page177',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceGarlic.html',
        controller: 'foodIntoleranceGarlicCtrl'
      }
    }
  })

  .state('tabsController.iceCream', {
    url: '/page178',
    views: {
      'tab3': {
        templateUrl: 'templates/iceCream.html',
        controller: 'iceCreamCtrl'
      }
    }
  })

  .state('tabsController.nauseaAndVomitingIceCream', {
    url: '/page215',
    views: {
      'tab3': {
        templateUrl: 'templates/nauseaAndVomitingIceCream.html',
        controller: 'nauseaAndVomitingIceCreamCtrl'
      }
    }
  })

  .state('tabsController.foodIntoleranceMilk', {
    url: '/page179',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceMilk.html',
        controller: 'foodIntoleranceMilkCtrl'
      }
    }
  })

  .state('tabsController.generalFatigueAfterDelivery', {
    url: '/page469',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueAfterDelivery.html',
        controller: 'generalFatigueAfterDeliveryCtrl'
      }
    }
  })

  .state('tabsController.generalFatigueAfterSurgery', {
    url: '/page470',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueAfterSurgery.html',
        controller: 'generalFatigueAfterSurgeryCtrl'
      }
    }
  })

  .state('tabsController.generalFatigueFromFlu', {
    url: '/page474',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueFromFlu.html',
        controller: 'generalFatigueFromFluCtrl'
      }
    }
  })

  .state('tabsController.generalFatigueFromIntellectualOverwork', {
    url: '/page475',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueFromIntellectualOverwork.html',
        controller: 'generalFatigueFromIntellectualOverworkCtrl'
      }
    }
  })

  .state('tabsController.generalFatigueFromPhysicalOverexertion', {
    url: '/page476',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueFromPhysicalOverexertion.html',
        controller: 'generalFatigueFromPhysicalOverexertionCtrl'
      }
    }
  })

  .state('tabsController.generalFatigueWithChilliness', {
    url: '/page477',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueWithChilliness.html',
        controller: 'generalFatigueWithChillinessCtrl'
      }
    }
  })

  .state('tabsController.generalFatigueBothIntellectualAndPhysical', {
    url: '/page471',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueBothIntellectualAndPhysical.html',
        controller: 'generalFatigueBothIntellectualAndPhysicalCtrl'
      }
    }
  })

  .state('tabsController.foodIntoleranceOnions', {
    url: '/page180',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceOnions.html',
        controller: 'foodIntoleranceOnionsCtrl'
      }
    }
  })

  .state('tabsController.foodIntoleranceSpices', {
    url: '/page181',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceSpices.html',
        controller: 'foodIntoleranceSpicesCtrl'
      }
    }
  })

  .state('overindulgence2', {
    url: '/page225',
    templateUrl: 'templates/overindulgence2.html',
    controller: 'overindulgence2Ctrl'
  })

  .state('tabsController.foodIntoleranceWine', {
    url: '/page182',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceWine.html',
        controller: 'foodIntoleranceWineCtrl'
      }
    }
  })

  .state('tabsController.constipationWithDiscoloredStools', {
    url: '/page155',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithDiscoloredStools.html',
        controller: 'constipationWithDiscoloredStoolsCtrl'
      }
    }
  })

  .state('tabsController.constipationWithGreatEffort', {
    url: '/page156',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithGreatEffort.html',
        controller: 'constipationWithGreatEffortCtrl'
      }
    }
  })

  .state('tabsController.diarrheaAfterEatingCabbage', {
    url: '/page162',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaAfterEatingCabbage.html',
        controller: 'diarrheaAfterEatingCabbageCtrl'
      }
    }
  })

  .state('tabsController.diarrheaEarlyInTheMorning', {
    url: '/page163',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaEarlyInTheMorning.html',
        controller: 'diarrheaEarlyInTheMorningCtrl'
      }
    }
  })

  .state('tabsController.diarrheaFoodPoisoning', {
    url: '/page164',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaFoodPoisoning.html',
        controller: 'diarrheaFoodPoisoningCtrl'
      }
    }
  })

  .state('tabsController.foodPoisoning', {
    url: '/page214',
    views: {
      'tab3': {
        templateUrl: 'templates/foodPoisoning.html',
        controller: 'foodPoisoningCtrl'
      }
    }
  })

  .state('tabsController.hangover', {
    url: '/page186',
    views: {
      'tab3': {
        templateUrl: 'templates/hangover.html',
        controller: 'hangoverCtrl'
      }
    }
  })

  .state('tabsController.diarrheaPainless', {
    url: '/page165',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaPainless.html',
        controller: 'diarrheaPainlessCtrl'
      }
    }
  })

  .state('tabsController.diarrheaTravelerSDiarrhea', {
    url: '/page166',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaTravelerSDiarrhea.html',
        controller: 'diarrheaTravelerSDiarrheaCtrl'
      }
    }
  })

  .state('tabsController.diarrheaWithColdSweats', {
    url: '/page167',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaWithColdSweats.html',
        controller: 'diarrheaWithColdSweatsCtrl'
      }
    }
  })

  .state('tabsController.diarrheaWithGasAndBloating', {
    url: '/page168',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaWithGasAndBloating.html',
        controller: 'diarrheaWithGasAndBloatingCtrl'
      }
    }
  })

  .state('tabsController.gasBelching', {
    url: '/page183',
    views: {
      'tab3': {
        templateUrl: 'templates/gasBelching.html',
        controller: 'gasBelchingCtrl'
      }
    }
  })

  .state('heartburnWithGasAndBloating', {
    url: '/page188',
    templateUrl: 'templates/heartburnWithGasAndBloating.html',
    controller: 'heartburnWithGasAndBloatingCtrl'
  })

  .state('heartburnWithIntenseBurning', {
    url: '/page189',
    templateUrl: 'templates/heartburnWithIntenseBurning.html',
    controller: 'heartburnWithIntenseBurningCtrl'
  })

  .state('heartburnOther', {
    url: '/page190',
    templateUrl: 'templates/heartburnOther.html',
    controller: 'heartburnOtherCtrl'
  })

  .state('tabsController.sourStomachfin', {
    url: '/page226',
    views: {
      'tab3': {
        templateUrl: 'templates/sourStomachfin.html',
        controller: 'sourStomachfinCtrl'
      }
    }
  })

  .state('tabsController.gasFlatulence', {
    url: '/page184',
    views: {
      'tab3': {
        templateUrl: 'templates/gasFlatulence.html',
        controller: 'gasFlatulenceCtrl'
      }
    }
  })

  .state('tabsController.gasOther', {
    url: '/page185',
    views: {
      'tab3': {
        templateUrl: 'templates/gasOther.html',
        controller: 'gasOtherCtrl'
      }
    }
  })

  .state('tabsController.diarrheaWithPainfulCramps', {
    url: '/page169',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaWithPainfulCramps.html',
        controller: 'diarrheaWithPainfulCrampsCtrl'
      }
    }
  })

  .state('tabsController.diarrheaWithRumbling', {
    url: '/page170',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaWithRumbling.html',
        controller: 'diarrheaWithRumblingCtrl'
      }
    }
  })

  .state('tabsController.constipationWithVeryDryStools', {
    url: '/page159',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithVeryDryStools.html',
        controller: 'constipationWithVeryDryStoolsCtrl'
      }
    }
  })

  .state('tabsController.constipationWithoutUrgesWithLargeStools', {
    url: '/page160',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithoutUrgesWithLargeStools.html',
        controller: 'constipationWithoutUrgesWithLargeStoolsCtrl'
      }
    }
  })

  .state('tabsController.withRestlessLegs', {
    url: '/page56',
    views: {
      'tab3': {
        templateUrl: 'templates/withRestlessLegs.html',
        controller: 'withRestlessLegsCtrl'
      }
    }
  })

  .state('tabsController.sneezing', {
    url: '/page25',
    views: {
      'tab3': {
        templateUrl: 'templates/sneezing.html',
        controller: 'sneezingCtrl'
      }
    }
  })

  .state('tabsController.runnyNoseWithDryness', {
    url: '/page16',
    views: {
      'tab3': {
        templateUrl: 'templates/runnyNoseWithDryness.html',
        controller: 'runnyNoseWithDrynessCtrl'
      }
    }
  })

  .state('feverDryAndHotSkin2', {
    url: '/page100',
    templateUrl: 'templates/feverDryAndHotSkin2.html',
    controller: 'feverDryAndHotSkin2Ctrl'
  })

  .state('tabsController.runnyNoseWithBurning', {
    url: '/page17',
    views: {
      'tab3': {
        templateUrl: 'templates/runnyNoseWithBurning.html',
        controller: 'runnyNoseWithBurningCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.homeopathicDilutions'
      2) Using $state.go programatically:
        $state.go('tabsController.homeopathicDilutions');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/page12
      /page1/tab3/page12
  */
  .state('tabsController.homeopathicDilutions', {
    url: '/page12',
    views: {
      'tab4': {
        templateUrl: 'templates/homeopathicDilutions.html',
        controller: 'homeopathicDilutionsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/homeopathicDilutions.html',
        controller: 'homeopathicDilutionsCtrl'
      }
    }
  })

  .state('welcomeSlider', {
    url: '/page212',
    templateUrl: 'templates/welcomeSlider.html',
    controller: 'welcomeSliderCtrl'
  })

  .state('page', {
    url: '/page503',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.boironSingleMedicinesBlueTubes', {
    url: '/page504',
    views: {
      'tab4': {
        templateUrl: 'templates/boironSingleMedicinesBlueTubes.html',
        controller: 'boironSingleMedicinesBlueTubesCtrl'
      }
    }
  })

  .state('aboutBoiron', {
    url: '/page522',
    templateUrl: 'templates/aboutBoiron.html',
    controller: 'aboutBoironCtrl'
  })

  .state('tabsController.homepathicMedicines', {
    url: '/page523',
    views: {
      'tab4': {
        templateUrl: 'templates/homepathicMedicines.html',
        controller: 'homepathicMedicinesCtrl'
      }
    }
  })

  .state('tabsController.boironMedicineFinder2', {
    url: '/page505',
    views: {
      'tab9': {
        templateUrl: 'templates/boironMedicineFinder2.html',
        controller: 'boironMedicineFinder2Ctrl'
      }
    }
  })

  .state('tabsController.onlineRetailers', {
    url: '/page506',
    views: {
      'tab9': {
        templateUrl: 'templates/onlineRetailers.html',
        controller: 'onlineRetailersCtrl'
      }
    }
  })

  .state('tabsController.connectWithUs', {
    url: '/page530',
    views: {
      'tab9': {
        templateUrl: 'templates/connectWithUs.html',
        controller: 'connectWithUsCtrl'
      }
    }    
  })

  .state('tabsController.socialMediaLink', {
    url: '/page531',
    views: {
      'tab9': {
        templateUrl: 'templates/socialMediaLink.html',
        controller: 'socialMediaLink'
      }
    }    
  })

  .state('page2', {
    url: '/page507',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('tabsController.newProducts', {
    url: '/page508',
    views: {
      'tab4': {
        templateUrl: 'templates/newProducts.html',
        controller: 'newProductsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')


});