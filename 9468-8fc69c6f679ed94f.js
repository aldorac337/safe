'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9468],
  {
    17843: function (e, t, r) {
      r.d(t, {
        w5: function () {
          return ef;
        },
      });
      var n = r(56805),
        a = r(62377),
        i = r(18833),
        o = r(7730),
        s = r(14752),
        l = r(35321),
        c = r(22396),
        u = r(94731),
        d = r(7523),
        f = r(53319);
      function p(e, t, r, n, a) {
        let i, s, l;
        (e = (0, o.lE)(e)), (t = (0, o.lE)(t));
        let c = 1,
          u = new Uint8Array(n),
          d = new Uint8Array(t.length + 4);
        d.set(t);
        for (let p = 1; p <= c; p++) {
          (d[t.length] = (p >> 24) & 255),
            (d[t.length + 1] = (p >> 16) & 255),
            (d[t.length + 2] = (p >> 8) & 255),
            (d[t.length + 3] = 255 & p);
          let h = (0, o.lE)((0, f.Gy)(a, e, d));
          i ||
            ((i = h.length),
            (l = new Uint8Array(i)),
            (c = Math.ceil(n / i)),
            (s = n - (c - 1) * i)),
            l.set(h);
          for (let t = 1; t < r; t++) {
            h = (0, o.lE)((0, f.Gy)(a, e, h));
            for (let e = 0; e < i; e++) l[e] ^= h[e];
          }
          let y = (p - 1) * i,
            m = p === c ? s : i;
          u.set((0, o.lE)(l).slice(0, m), y);
        }
        return (0, o.Dv)(u);
      }
      var h = r(50357),
        y = r(65653),
        m = r(53106),
        g = r(31857),
        b = r(57934),
        w = r(67214);
      let v = new w.Yd('wordlists/5.7.0');
      class C {
        constructor(e) {
          v.checkAbstract(new.target, C), (0, h.zG)(this, 'locale', e);
        }
        split(e) {
          return e.toLowerCase().split(/ +/g);
        }
        join(e) {
          return e.join(' ');
        }
        static check(e) {
          let t = [];
          for (let r = 0; r < 2048; r++) {
            let n = e.getWord(r);
            if (r !== e.getWordIndex(n)) return '0x';
            t.push(n);
          }
          return (0, b.id)(t.join('\n') + '\n');
        }
        static register(e, t) {
          t || (t = e.locale);
        }
      }
      let S = null;
      function A(e) {
        if (
          null == S &&
          ((S =
            'AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo'
              .replace(/([A-Z])/g, ' $1')
              .toLowerCase()
              .substring(1)
              .split(' ')),
          '0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60' !== C.check(e))
        )
          throw ((S = null), Error('BIP39 Wordlist for en (English) FAILED'));
      }
      class E extends C {
        constructor() {
          super('en');
        }
        getWord(e) {
          return A(this), S[e];
        }
        getWordIndex(e) {
          return A(this), S.indexOf(e);
        }
      }
      let T = new E();
      C.register(T);
      let k = { en: T },
        x = new w.Yd('hdnode/5.7.0'),
        P = d.O$.from('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
        B = (0, l.Y0)('Bitcoin seed');
      function D(e) {
        return ((1 << e) - 1) << (8 - e);
      }
      function I(e) {
        return (0, o.$m)((0, o.Dv)(e), 32);
      }
      function R(e) {
        return u.eU.encode((0, o.zo)([e, (0, o.p3)((0, f.JQ)((0, f.JQ)(e)), 0, 4)]));
      }
      function F(e) {
        if (null == e) return k.en;
        if ('string' == typeof e) {
          let t = k[e];
          return null == t && x.throwArgumentError('unknown locale', 'wordlist', e), t;
        }
        return e;
      }
      let N = {},
        M = "m/44'/60'/0'/0/0";
      class _ {
        constructor(e, t, r, n, a, i, s, l) {
          if (e !== N) throw Error('HDNode constructor cannot be called directly');
          if (t) {
            let e = new y.Et(t);
            (0, h.zG)(this, 'privateKey', e.privateKey),
              (0, h.zG)(this, 'publicKey', e.compressedPublicKey);
          } else (0, h.zG)(this, 'privateKey', null), (0, h.zG)(this, 'publicKey', (0, o.Dv)(r));
          (0, h.zG)(this, 'parentFingerprint', n),
            (0, h.zG)(this, 'fingerprint', (0, o.p3)((0, f.bP)((0, f.JQ)(this.publicKey)), 0, 4)),
            (0, h.zG)(this, 'address', (0, g.db)(this.publicKey)),
            (0, h.zG)(this, 'chainCode', a),
            (0, h.zG)(this, 'index', i),
            (0, h.zG)(this, 'depth', s),
            null == l
              ? ((0, h.zG)(this, 'mnemonic', null), (0, h.zG)(this, 'path', null))
              : 'string' == typeof l
                ? ((0, h.zG)(this, 'mnemonic', null), (0, h.zG)(this, 'path', l))
                : ((0, h.zG)(this, 'mnemonic', l), (0, h.zG)(this, 'path', l.path));
        }
        get extendedKey() {
          if (this.depth >= 256) throw Error('Depth too large!');
          return R(
            (0, o.zo)([
              null != this.privateKey ? '0x0488ADE4' : '0x0488B21E',
              (0, o.Dv)(this.depth),
              this.parentFingerprint,
              (0, o.$m)((0, o.Dv)(this.index), 4),
              this.chainCode,
              null != this.privateKey ? (0, o.zo)(['0x00', this.privateKey]) : this.publicKey,
            ])
          );
        }
        neuter() {
          return new _(
            N,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path
          );
        }
        _derive(e) {
          if (e > 4294967295) throw Error('invalid index - ' + String(e));
          let t = this.path;
          t && (t += '/' + (2147483647 & e));
          let r = new Uint8Array(37);
          if (2147483648 & e) {
            if (!this.privateKey) throw Error('cannot derive child of neutered node');
            r.set((0, o.lE)(this.privateKey), 1), t && (t += "'");
          } else r.set((0, o.lE)(this.publicKey));
          for (let t = 24; t >= 0; t -= 8) r[33 + (t >> 3)] = (e >> (24 - t)) & 255;
          let n = (0, o.lE)((0, f.Gy)(m.p.sha512, this.chainCode, r)),
            a = n.slice(0, 32),
            i = n.slice(32),
            s = null,
            l = null;
          this.privateKey
            ? (s = I(d.O$.from(a).add(this.privateKey).mod(P)))
            : (l = new y.Et((0, o.Dv)(a))._addPoint(this.publicKey));
          let c = t,
            u = this.mnemonic;
          return (
            u && (c = Object.freeze({ phrase: u.phrase, path: t, locale: u.locale || 'en' })),
            new _(N, s, l, this.fingerprint, I(i), e, this.depth + 1, c)
          );
        }
        derivePath(e) {
          let t = e.split('/');
          if (0 === t.length || ('m' === t[0] && 0 !== this.depth))
            throw Error('invalid path - ' + e);
          'm' === t[0] && t.shift();
          let r = this;
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            if (n.match(/^[0-9]+'$/)) {
              let e = parseInt(n.substring(0, n.length - 1));
              if (e >= 2147483648) throw Error('invalid path index - ' + n);
              r = r._derive(2147483648 + e);
            } else if (n.match(/^[0-9]+$/)) {
              let e = parseInt(n);
              if (e >= 2147483648) throw Error('invalid path index - ' + n);
              r = r._derive(e);
            } else throw Error('invalid path component - ' + n);
          }
          return r;
        }
        static _fromSeed(e, t) {
          let r = (0, o.lE)(e);
          if (r.length < 16 || r.length > 64) throw Error('invalid seed');
          let n = (0, o.lE)((0, f.Gy)(m.p.sha512, B, r));
          return new _(N, I(n.slice(0, 32)), null, '0x00000000', I(n.slice(32)), 0, 0, t);
        }
        static fromMnemonic(e, t, r) {
          return (
            (r = F(r)),
            (e = O(z(e, r), r)),
            _._fromSeed(
              (function (e, t) {
                t || (t = '');
                let r = (0, l.Y0)('mnemonic' + t, l.Uj.NFKD);
                return p((0, l.Y0)(e, l.Uj.NFKD), r, 2048, 64, 'sha512');
              })(e, t),
              { phrase: e, path: 'm', locale: r.locale }
            )
          );
        }
        static fromSeed(e) {
          return _._fromSeed(e, null);
        }
        static fromExtendedKey(e) {
          let t = u.eU.decode(e);
          (82 !== t.length || R(t.slice(0, 78)) !== e) &&
            x.throwArgumentError('invalid extended key', 'extendedKey', '[REDACTED]');
          let r = t[4],
            n = (0, o.Dv)(t.slice(5, 9)),
            a = parseInt((0, o.Dv)(t.slice(9, 13)).substring(2), 16),
            i = (0, o.Dv)(t.slice(13, 45)),
            s = t.slice(45, 78);
          switch ((0, o.Dv)(t.slice(0, 4))) {
            case '0x0488b21e':
            case '0x043587cf':
              return new _(N, null, (0, o.Dv)(s), n, i, a, r, null);
            case '0x0488ade4':
            case '0x04358394 ':
              if (0 !== s[0]) break;
              return new _(N, (0, o.Dv)(s.slice(1)), null, n, i, a, r, null);
          }
          return x.throwArgumentError('invalid extended key', 'extendedKey', '[REDACTED]');
        }
      }
      function z(e, t) {
        (t = F(t)), x.checkNormalize();
        let r = t.split(e);
        if (r.length % 3 != 0) throw Error('invalid mnemonic');
        let n = (0, o.lE)(new Uint8Array(Math.ceil((11 * r.length) / 8))),
          a = 0;
        for (let e = 0; e < r.length; e++) {
          let i = t.getWordIndex(r[e].normalize('NFKD'));
          if (-1 === i) throw Error('invalid mnemonic');
          for (let e = 0; e < 11; e++)
            i & (1 << (10 - e)) && (n[a >> 3] |= 1 << (7 - (a % 8))), a++;
        }
        let i = (32 * r.length) / 3,
          s = D(r.length / 3);
        if (((0, o.lE)((0, f.JQ)(n.slice(0, i / 8)))[0] & s) != (n[n.length - 1] & s))
          throw Error('invalid checksum');
        return (0, o.Dv)(n.slice(0, i / 8));
      }
      function O(e, t) {
        if (((t = F(t)), (e = (0, o.lE)(e)).length % 4 != 0 || e.length < 16 || e.length > 32))
          throw Error('invalid entropy');
        let r = [0],
          n = 11;
        for (let t = 0; t < e.length; t++)
          n > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= e[t]), (n -= 8))
            : ((r[r.length - 1] <<= n),
              (r[r.length - 1] |= e[t] >> (8 - n)),
              r.push(e[t] & ((1 << (8 - n)) - 1)),
              (n += 3));
        let a = e.length / 4,
          i = (0, o.lE)((0, f.JQ)(e))[0] & D(a);
        return (
          (r[r.length - 1] <<= a),
          (r[r.length - 1] |= i >> (8 - a)),
          t.join(r.map((e) => t.getWord(e)))
        );
      }
      let G = new w.Yd('random/5.7.0'),
        L = (function () {
          if ('undefined' != typeof self) return self;
          if ('undefined' != typeof window) return window;
          if (void 0 !== r.g) return r.g;
          throw Error('unable to locate global object');
        })(),
        $ = L.crypto || L.msCrypto;
      function K(e) {
        (e <= 0 || e > 1024 || e % 1 || e != e) &&
          G.throwArgumentError('invalid length', 'length', e);
        let t = new Uint8Array(e);
        return $.getRandomValues(t), (0, o.lE)(t);
      }
      ($ && $.getRandomValues) ||
        (G.warn('WARNING: Missing strong random number source'),
        ($ = {
          getRandomValues: function (e) {
            return G.throwError(
              'no secure random source avaialble',
              w.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: 'crypto.getRandomValues' }
            );
          },
        }));
      var U = r(13929),
        H = r.n(U),
        W = r(37262),
        V = r.n(W);
      function j(e) {
        return 'string' == typeof e && '0x' !== e.substring(0, 2) && (e = '0x' + e), (0, o.lE)(e);
      }
      function q(e, t) {
        for (e = String(e); e.length < t; ) e = '0' + e;
        return e;
      }
      function J(e) {
        return 'string' == typeof e ? (0, l.Y0)(e, l.Uj.NFKC) : (0, o.lE)(e);
      }
      function Y(e, t) {
        let r = e,
          n = t.toLowerCase().split('/');
        for (let e = 0; e < n.length; e++) {
          let t = null;
          for (let a in r)
            if (a.toLowerCase() === n[e]) {
              t = r[a];
              break;
            }
          if (null === t) return null;
          r = t;
        }
        return r;
      }
      let Q = 'json-wallets/5.7.0',
        Z = new w.Yd(Q);
      function X(e) {
        return null != e && e.mnemonic && e.mnemonic.phrase;
      }
      class ee extends h.dk {
        isKeystoreAccount(e) {
          return !!(e && e._isKeystoreAccount);
        }
      }
      function et(e, t) {
        let r = j(Y(e, 'crypto/ciphertext'));
        if (
          (0, o.Dv)((0, s.w)((0, o.zo)([t.slice(16, 32), r]))).substring(2) !==
          Y(e, 'crypto/mac').toLowerCase()
        )
          throw Error('invalid password');
        let a = (function (e, t, r) {
          if ('aes-128-ctr' === Y(e, 'crypto/cipher')) {
            let n = j(Y(e, 'crypto/cipherparams/iv')),
              a = new (H().Counter)(n),
              i = new (H().ModeOfOperation.ctr)(t, a);
            return (0, o.lE)(i.decrypt(r));
          }
          return null;
        })(e, t.slice(0, 16), r);
        a ||
          Z.throwError('unsupported cipher', w.Yd.errors.UNSUPPORTED_OPERATION, {
            operation: 'decrypt',
          });
        let i = t.slice(32, 64),
          l = (0, g.db)(a);
        if (e.address) {
          let t = e.address.toLowerCase();
          if (('0x' !== t.substring(0, 2) && (t = '0x' + t), (0, n.Kn)(t) !== l))
            throw Error('address mismatch');
        }
        let c = { _isKeystoreAccount: !0, address: l, privateKey: (0, o.Dv)(a) };
        if ('0.1' === Y(e, 'x-ethers/version')) {
          let t = j(Y(e, 'x-ethers/mnemonicCiphertext')),
            r = j(Y(e, 'x-ethers/mnemonicCounter')),
            n = new (H().Counter)(r),
            a = new (H().ModeOfOperation.ctr)(i, n),
            s = Y(e, 'x-ethers/path') || M,
            l = Y(e, 'x-ethers/locale') || 'en',
            u = (0, o.lE)(a.decrypt(t));
          try {
            let e = O(u, l),
              t = _.fromMnemonic(e, null, l).derivePath(s);
            if (t.privateKey != c.privateKey) throw Error('mnemonic mismatch');
            c.mnemonic = t.mnemonic;
          } catch (e) {
            if (e.code !== w.Yd.errors.INVALID_ARGUMENT || 'wordlist' !== e.argument) throw e;
          }
        }
        return new ee(c);
      }
      function er(e, t, r, n, a) {
        return (0, o.lE)(p(e, t, r, n, a));
      }
      function en(e, t, r, n, a) {
        return Promise.resolve(er(e, t, r, n, a));
      }
      function ea(e, t, r, n, a) {
        let i = J(t),
          o = Y(e, 'crypto/kdf');
        if (o && 'string' == typeof o) {
          let t = function (e, t) {
            return Z.throwArgumentError('invalid key-derivation function parameters', e, t);
          };
          if ('scrypt' === o.toLowerCase()) {
            let r = j(Y(e, 'crypto/kdfparams/salt')),
              s = parseInt(Y(e, 'crypto/kdfparams/n')),
              l = parseInt(Y(e, 'crypto/kdfparams/r')),
              c = parseInt(Y(e, 'crypto/kdfparams/p'));
            (s && l && c) || t('kdf', o), (s & (s - 1)) != 0 && t('N', s);
            let u = parseInt(Y(e, 'crypto/kdfparams/dklen'));
            return 32 !== u && t('dklen', u), n(i, r, s, l, c, 64, a);
          }
          if ('pbkdf2' === o.toLowerCase()) {
            let n = j(Y(e, 'crypto/kdfparams/salt')),
              a = null,
              o = Y(e, 'crypto/kdfparams/prf');
            'hmac-sha256' === o
              ? (a = 'sha256')
              : 'hmac-sha512' === o
                ? (a = 'sha512')
                : t('prf', o);
            let s = parseInt(Y(e, 'crypto/kdfparams/c')),
              l = parseInt(Y(e, 'crypto/kdfparams/dklen'));
            return 32 !== l && t('dklen', l), r(i, n, s, l, a);
          }
        }
        return Z.throwArgumentError('unsupported key-derivation function', 'kdf', o);
      }
      let ei = new w.Yd(Q);
      class eo extends h.dk {
        isCrowdsaleAccount(e) {
          return !!(e && e._isCrowdsaleAccount);
        }
      }
      function es(e, t) {
        let r = JSON.parse(e);
        t = J(t);
        let a = (0, n.Kn)(Y(r, 'ethaddr')),
          i = j(Y(r, 'encseed'));
        (i && i.length % 16 == 0) || ei.throwArgumentError('invalid encseed', 'json', e);
        let c = (0, o.lE)(p(t, t, 2e3, 32, 'sha256')).slice(0, 16),
          u = i.slice(0, 16),
          d = i.slice(16),
          f = new (H().ModeOfOperation.cbc)(c, u),
          h = H().padding.pkcs7.strip((0, o.lE)(f.decrypt(d))),
          y = '';
        for (let e = 0; e < h.length; e++) y += String.fromCharCode(h[e]);
        let m = (0, l.Y0)(y);
        return new eo({ _isCrowdsaleAccount: !0, address: a, privateKey: (0, s.w)(m) });
      }
      function el(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return t.encseed && t.ethaddr;
      }
      function ec(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return !!t.version && parseInt(t.version) === t.version && 3 === parseInt(t.version);
      }
      var eu = function (e, t, r, n) {
        return new (r || (r = Promise))(function (a, i) {
          function o(e) {
            try {
              l(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, s);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      let ed = new w.Yd('wallet/5.6.2');
      class ef extends i.E {
        constructor(e, t) {
          var r;
          if ((super(), null != (r = e) && (0, o.A7)(r.privateKey, 32) && null != r.address)) {
            let t = new y.Et(e.privateKey);
            if (
              ((0, h.zG)(this, '_signingKey', () => t),
              (0, h.zG)(this, 'address', (0, g.db)(this.publicKey)),
              this.address !== (0, n.Kn)(e.address) &&
                ed.throwArgumentError('privateKey/address mismatch', 'privateKey', '[REDACTED]'),
              (function (e) {
                let t = e.mnemonic;
                return t && t.phrase;
              })(e))
            ) {
              let t = e.mnemonic;
              (0, h.zG)(this, '_mnemonic', () => ({
                phrase: t.phrase,
                path: t.path || M,
                locale: t.locale || 'en',
              }));
              let r = this.mnemonic,
                n = _.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path);
              (0, g.db)(n.privateKey) !== this.address &&
                ed.throwArgumentError('mnemonic/address mismatch', 'privateKey', '[REDACTED]');
            } else (0, h.zG)(this, '_mnemonic', () => null);
          } else {
            if (y.Et.isSigningKey(e))
              'secp256k1' !== e.curve &&
                ed.throwArgumentError(
                  'unsupported curve; must be secp256k1',
                  'privateKey',
                  '[REDACTED]'
                ),
                (0, h.zG)(this, '_signingKey', () => e);
            else {
              'string' == typeof e && e.match(/^[0-9a-f]*$/i) && 64 === e.length && (e = '0x' + e);
              let t = new y.Et(e);
              (0, h.zG)(this, '_signingKey', () => t);
            }
            (0, h.zG)(this, '_mnemonic', () => null),
              (0, h.zG)(this, 'address', (0, g.db)(this.publicKey));
          }
          t && !a.zt.isProvider(t) && ed.throwArgumentError('invalid provider', 'provider', t),
            (0, h.zG)(this, 'provider', t || null);
        }
        get mnemonic() {
          return this._mnemonic();
        }
        get privateKey() {
          return this._signingKey().privateKey;
        }
        get publicKey() {
          return this._signingKey().publicKey;
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        connect(e) {
          return new ef(this, e);
        }
        signTransaction(e) {
          return (0, h.mE)(e).then((t) => {
            null != t.from &&
              ((0, n.Kn)(t.from) !== this.address &&
                ed.throwArgumentError(
                  'transaction from address mismatch',
                  'transaction.from',
                  e.from
                ),
              delete t.from);
            let r = this._signingKey().signDigest((0, s.w)((0, g.qC)(t)));
            return (0, g.qC)(t, r);
          });
        }
        signMessage(e) {
          return eu(this, void 0, void 0, function* () {
            var t;
            return (0, o.gV)(
              this._signingKey().signDigest(
                ('string' == typeof (t = e) && (t = (0, l.Y0)(t)),
                (0, s.w)(
                  (0, o.zo)([
                    (0, l.Y0)('\x19Ethereum Signed Message:\n'),
                    (0, l.Y0)(String(t.length)),
                    t,
                  ])
                ))
              )
            );
          });
        }
        _signTypedData(e, t, r) {
          return eu(this, void 0, void 0, function* () {
            let n = yield c.E.resolveNames(
              e,
              t,
              r,
              (e) => (
                null == this.provider &&
                  ed.throwError(
                    'cannot resolve ENS names without a provider',
                    w.Yd.errors.UNSUPPORTED_OPERATION,
                    { operation: 'resolveName', value: e }
                  ),
                this.provider.resolveName(e)
              )
            );
            return (0, o.gV)(this._signingKey().signDigest(c.E.hash(n.domain, t, n.value)));
          });
        }
        encrypt(e, t, r) {
          if (('function' != typeof t || r || ((r = t), (t = {})), r && 'function' != typeof r))
            throw Error('invalid callback');
          return (
            t || (t = {}),
            (function (e, t, r, a) {
              try {
                if ((0, n.Kn)(e.address) !== (0, g.db)(e.privateKey))
                  throw Error('address/privateKey mismatch');
                if (X(e)) {
                  let t = e.mnemonic;
                  if (
                    _.fromMnemonic(t.phrase, null, t.locale).derivePath(t.path || M).privateKey !=
                    e.privateKey
                  )
                    throw Error('mnemonic mismatch');
                }
              } catch (e) {
                return Promise.reject(e);
              }
              'function' != typeof r || a || ((a = r), (r = {})), r || (r = {});
              let i = (0, o.lE)(e.privateKey),
                l = J(t),
                c = null,
                u = null,
                d = null;
              if (X(e)) {
                let t = e.mnemonic;
                (c = (0, o.lE)(z(t.phrase, t.locale || 'en'))),
                  (u = t.path || M),
                  (d = t.locale || 'en');
              }
              let f = r.client;
              f || (f = 'ethers.js');
              let p = null;
              p = r.salt ? (0, o.lE)(r.salt) : K(32);
              let h = null;
              if (r.iv) {
                if (16 !== (h = (0, o.lE)(r.iv)).length) throw Error('invalid iv');
              } else h = K(16);
              let y = null;
              if (r.uuid) {
                if (16 !== (y = (0, o.lE)(r.uuid)).length) throw Error('invalid uuid');
              } else y = K(16);
              let m = 131072,
                b = 8,
                w = 1;
              return (
                r.scrypt &&
                  (r.scrypt.N && (m = r.scrypt.N),
                  r.scrypt.r && (b = r.scrypt.r),
                  r.scrypt.p && (w = r.scrypt.p)),
                V()
                  .scrypt(l, p, m, b, w, 64, a)
                  .then((t) => {
                    let r = (t = (0, o.lE)(t)).slice(0, 16),
                      n = t.slice(16, 32),
                      a = t.slice(32, 64),
                      l = new (H().Counter)(h),
                      g = new (H().ModeOfOperation.ctr)(r, l),
                      v = (0, o.lE)(g.encrypt(i)),
                      C = (0, s.w)((0, o.zo)([n, v])),
                      S = {
                        address: e.address.substring(2).toLowerCase(),
                        id: (function (e) {
                          let t = (0, o.lE)(e);
                          (t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128);
                          let r = (0, o.Dv)(t);
                          return [
                            r.substring(2, 10),
                            r.substring(10, 14),
                            r.substring(14, 18),
                            r.substring(18, 22),
                            r.substring(22, 34),
                          ].join('-');
                        })(y),
                        version: 3,
                        crypto: {
                          cipher: 'aes-128-ctr',
                          cipherparams: { iv: (0, o.Dv)(h).substring(2) },
                          ciphertext: (0, o.Dv)(v).substring(2),
                          kdf: 'scrypt',
                          kdfparams: {
                            salt: (0, o.Dv)(p).substring(2),
                            n: m,
                            dklen: 32,
                            p: w,
                            r: b,
                          },
                          mac: C.substring(2),
                        },
                      };
                    if (c) {
                      let e = K(16),
                        t = new (H().Counter)(e),
                        r = new (H().ModeOfOperation.ctr)(a, t),
                        n = (0, o.lE)(r.encrypt(c)),
                        i = new Date(),
                        s =
                          i.getUTCFullYear() +
                          '-' +
                          q(i.getUTCMonth() + 1, 2) +
                          '-' +
                          q(i.getUTCDate(), 2) +
                          'T' +
                          q(i.getUTCHours(), 2) +
                          '-' +
                          q(i.getUTCMinutes(), 2) +
                          '-' +
                          q(i.getUTCSeconds(), 2) +
                          '.0Z';
                      S['x-ethers'] = {
                        client: f,
                        gethFilename: 'UTC--' + s + '--' + S.address,
                        mnemonicCounter: (0, o.Dv)(e).substring(2),
                        mnemonicCiphertext: (0, o.Dv)(n).substring(2),
                        path: u,
                        locale: d,
                        version: '0.1',
                      };
                    }
                    return JSON.stringify(S);
                  })
              );
            })(this, e, t, r)
          );
        }
        static createRandom(e) {
          let t = K(16);
          e || (e = {}),
            e.extraEntropy &&
              (t = (0, o.lE)((0, o.p3)((0, s.w)((0, o.zo)([t, e.extraEntropy])), 0, 16)));
          let r = O(t, e.locale);
          return ef.fromMnemonic(r, e.path, e.locale);
        }
        static fromEncryptedJson(e, t, r) {
          return (function (e, t, r) {
            if (el(e)) {
              r && r(0);
              let n = es(e, t);
              return r && r(1), Promise.resolve(n);
            }
            return ec(e)
              ? (function (e, t, r) {
                  var n, a, i, o;
                  return (
                    (n = this),
                    (a = void 0),
                    (i = void 0),
                    (o = function* () {
                      let n = JSON.parse(e),
                        a = yield ea(n, t, en, V().scrypt, r);
                      return et(n, a);
                    }),
                    new (i || (i = Promise))(function (e, t) {
                      function r(e) {
                        try {
                          l(o.next(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function s(e) {
                        try {
                          l(o.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function l(t) {
                        var n;
                        t.done
                          ? e(t.value)
                          : ((n = t.value) instanceof i
                              ? n
                              : new i(function (e) {
                                  e(n);
                                })
                            ).then(r, s);
                      }
                      l((o = o.apply(n, a || [])).next());
                    })
                  );
                })(e, t, r)
              : Promise.reject(Error('invalid JSON wallet'));
          })(e, t, r).then((e) => new ef(e));
        }
        static fromEncryptedJsonSync(e, t) {
          return new ef(
            (function (e, t) {
              if (el(e)) return es(e, t);
              if (ec(e))
                return (function (e, t) {
                  let r = JSON.parse(e),
                    n = ea(r, t, er, V().syncScrypt);
                  return et(r, n);
                })(e, t);
              throw Error('invalid JSON wallet');
            })(e, t)
          );
        }
        static fromMnemonic(e, t, r) {
          return t || (t = M), new ef(_.fromMnemonic(e, null, r).derivePath(t));
        }
      }
    },
    13929: function (e) {
      !(function (t) {
        function r(e) {
          return parseInt(e) === e;
        }
        function n(e) {
          if (!r(e.length)) return !1;
          for (var t = 0; t < e.length; t++) if (!r(e[t]) || e[t] < 0 || e[t] > 255) return !1;
          return !0;
        }
        function a(e, t) {
          if (e.buffer && ArrayBuffer.isView(e) && 'Uint8Array' === e.name)
            return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
          if (Array.isArray(e)) {
            if (!n(e)) throw Error('Array contains invalid value: ' + e);
            return new Uint8Array(e);
          }
          if (r(e.length) && n(e)) return new Uint8Array(e);
          throw Error('unsupported array-like object');
        }
        function i(e) {
          return new Uint8Array(e);
        }
        function o(e, t, r, n, a) {
          (null != n || null != a) &&
            (e = e.slice ? e.slice(n, a) : Array.prototype.slice.call(e, n, a)),
            t.set(e, r);
        }
        var s,
          l =
            ((s = '0123456789abcdef'),
            {
              toBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                return t;
              },
              fromBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r++) {
                  var n = e[r];
                  t.push(s[(240 & n) >> 4] + s[15 & n]);
                }
                return t.join('');
              },
            }),
          c = { 16: 10, 24: 12, 32: 14 },
          u = [
            1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151,
            53, 106, 212, 179, 125, 250, 239, 197, 145,
          ],
          d = [
            99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130,
            201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38,
            54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154,
            7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179,
            41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207,
            208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64,
            143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151,
            68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70,
            238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145,
            149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174,
            8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62,
            181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105,
            217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66,
            104, 65, 153, 45, 15, 176, 84, 187, 22,
          ],
          f = [
            82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57,
            130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194,
            35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91,
            162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204,
            93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157,
            132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30,
            143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220,
            234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226,
            249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14,
            170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90,
            244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127,
            169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42,
            245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225,
            105, 20, 99, 85, 33, 12, 125,
          ],
          p = [
            3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041,
            2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474,
            1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645,
            2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738,
            597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774,
            1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420,
            3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908,
            2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301,
            235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613,
            3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818,
            3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307,
            3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264,
            3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843,
            2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933,
            3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552,
            67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387,
            1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100,
            1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118,
            3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202,
            2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572,
            3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575,
            1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051,
            672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286,
            1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085,
            3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243,
            3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682,
            1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470,
            1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308,
            1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977,
            2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956,
            3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967,
            2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128,
            3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399,
            765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080,
            2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649,
            2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163,
            2824099068, 1841019862, 739644986,
          ],
          h = [
            2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751,
            1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439,
            3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890,
            3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503,
            3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059,
            1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525,
            886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908,
            1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866,
            151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098,
            2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638,
            4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057,
            1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264,
            535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953,
            3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498,
            384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337,
            100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137,
            4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005,
            3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083,
            1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207,
            3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052,
            3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340,
            1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216,
            1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026,
            1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170,
            1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833,
            852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022,
            3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810,
            3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988,
            4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327,
            3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421,
            2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957,
            4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233,
            334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444,
            3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080,
            2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934,
            3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008,
            4238890068, 3597515707, 975967766,
          ],
          y = [
            1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791,
            3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519,
            2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690,
            1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063,
            2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779,
            644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325,
            3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348,
            3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466,
            118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018,
            1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598,
            1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817,
            3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784,
            4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753,
            1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858,
            4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257,
            33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297,
            2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005,
            3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003,
            3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167,
            1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092,
            1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540,
            577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416,
            339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546,
            978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650,
            3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713,
            3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422,
            2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050,
            2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708,
            2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287,
            1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261,
            1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557,
            1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393,
            4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684,
            2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480,
            3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214,
            1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488,
            1425844308, 3151392187, 372911126,
          ],
          m = [
            1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006,
            3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949,
            2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615,
            1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573,
            2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149,
            640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625,
            3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088,
            3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191,
            117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463,
            1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508,
            1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402,
            3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704,
            4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178,
            1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543,
            4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577,
            33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282,
            2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505,
            3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573,
            3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077,
            1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432,
            1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115,
            572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491,
            336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716,
            976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855,
            3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818,
            3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572,
            2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340,
            2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328,
            2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822,
            1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401,
            1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282,
            1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753,
            4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099,
            2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880,
            3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719,
            1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443,
            1414855848, 3149649517, 370555436,
          ],
          g = [
            1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851,
            1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247,
            641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266,
            2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138,
            3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195,
            666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074,
            2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496,
            2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410,
            3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362,
            3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829,
            3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065,
            1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
            2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252,
            1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233,
            4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950,
            1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497,
            2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374,
            3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465,
            337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884,
            1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226,
            1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285,
            496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682,
            1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585,
            2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012,
            1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645,
            2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182,
            3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406,
            566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231,
            708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845,
            4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980,
            3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917,
            4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476,
            933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780,
            2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300,
            2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228,
            675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265,
            3576870512, 1215061108, 3501741890,
          ],
          b = [
            1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216,
            2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987,
            2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101,
            310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033,
            768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710,
            3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529,
            1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576,
            428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675,
            129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122,
            1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694,
            533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980,
            2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461,
            3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947,
            2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703,
            3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720,
            507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327,
            261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394,
            182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840,
            3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349,
            3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636,
            272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865,
            1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072,
            575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545,
            4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837,
            223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695,
            3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147,
            2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846,
            136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226,
            824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840,
            1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085,
            3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517,
            1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921,
            2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705,
            1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575,
            2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253,
            2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980,
            1893020342, 1950903388, 1120974935,
          ],
          w = [
            2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946,
            59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562,
            1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311,
            4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298,
            2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3,
            1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914,
            861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376,
            4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645,
            671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107,
            2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749,
            1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475,
            4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286,
            2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952,
            2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938,
            516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165,
            3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202,
            3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594,
            3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150,
            2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354,
            1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881,
            2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185,
            793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052,
            1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200,
            2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442,
            2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595,
            2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892,
            3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991,
            3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956,
            590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135,
            2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050,
            81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692,
            1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631,
            209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695,
            3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845,
            3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778,
            1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195,
            3060847922, 1551124588, 1463996600,
          ],
          v = [
            4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116,
            3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117,
            893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571,
            1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373,
            3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785,
            3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389,
            1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936,
            1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870,
            3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082,
            377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454,
            878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395,
            1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981,
            1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097,
            3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068,
            2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775,
            2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692,
            1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484,
            2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765,
            514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164,
            1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431,
            1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255,
            2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577,
            3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745,
            3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092,
            2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770,
            1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152,
            1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786,
            3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681,
            1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275,
            77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700,
            2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457,
            2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426,
            2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690,
            3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015,
            1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908,
            1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555,
            850817237, 1817998408, 3092726480,
          ],
          C = [
            0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849,
            1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698,
            1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327,
            3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396,
            2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702,
            3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029,
            3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584,
            666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064,
            1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766,
            2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455,
            3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228,
            4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265,
            1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698,
            193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248,
            1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123,
            337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334,
            2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805,
            3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980,
            1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333,
            1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664,
            361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195,
            2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266,
            3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178,
            2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895,
            4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780,
            1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989,
            168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725,
            3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619,
            3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406,
            3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646,
            675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661,
            1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703,
            260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500,
            1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585,
            3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154,
            2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795,
          ],
          S = [
            0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259,
            1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518,
            1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937,
            2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036,
            3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132,
            1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569,
            1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454,
            3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067,
            2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336,
            4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947,
            3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476,
            2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409,
            1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370,
            839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820,
            2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491,
            3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158,
            915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350,
            1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085,
            4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468,
            3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339,
            2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710,
            1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101,
            870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643,
            2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780,
            3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705,
            930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017,
            1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050,
            32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884,
            1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617,
            1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566,
            2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171,
            3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723,
            1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390,
            1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545,
            3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204,
            2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855,
          ],
          A = [
            0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639,
            1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278,
            1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237,
            4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556,
            2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312,
            2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769,
            3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674,
            1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867,
            244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806,
            1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145,
            95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665,
            3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304,
            2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475,
            4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185,
            4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854,
            2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631,
            287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892,
            1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356,
            3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515,
            2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082,
            2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898,
            695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833,
            1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835,
            1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836,
            1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645,
            2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318,
            3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634,
            3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549,
            3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452,
            4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591,
            1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846,
            919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165,
            895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610,
            1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691,
            3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344,
            2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150,
          ],
          E = [
            0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954,
            1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908,
            2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582,
            2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816,
            4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417,
            529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439,
            1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869,
            3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347,
            3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241,
            1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097,
            1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571,
            137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589,
            3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895,
            2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650,
            1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376,
            396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664,
            3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230,
            2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700,
            3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453,
            3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919,
            2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785,
            1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571,
            274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038,
            3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860,
            2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690,
            1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584,
            265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160,
            2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464,
            2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786,
            3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266,
            1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156,
            1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053,
            2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155,
            4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745,
            600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159,
            1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925,
          ];
        function T(e) {
          for (var t = [], r = 0; r < e.length; r += 4)
            t.push((e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]);
          return t;
        }
        var k = function (e) {
          if (!(this instanceof k)) throw Error('AES must be instanitated with `new`');
          Object.defineProperty(this, 'key', { value: a(e, !0) }), this._prepare();
        };
        (k.prototype._prepare = function () {
          var e = c[this.key.length];
          if (null == e) throw Error('invalid key size (must be 16, 24 or 32 bytes)');
          (this._Ke = []), (this._Kd = []);
          for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
          for (var r = (e + 1) * 4, n = this.key.length / 4, a = T(this.key), t = 0; t < n; t++)
            (i = t >> 2), (this._Ke[i][t % 4] = a[t]), (this._Kd[e - i][t % 4] = a[t]);
          for (var i, o, s = 0, l = n; l < r; ) {
            if (
              ((o = a[n - 1]),
              (a[0] ^=
                (d[(o >> 16) & 255] << 24) ^
                (d[(o >> 8) & 255] << 16) ^
                (d[255 & o] << 8) ^
                d[(o >> 24) & 255] ^
                (u[s] << 24)),
              (s += 1),
              8 != n)
            )
              for (var t = 1; t < n; t++) a[t] ^= a[t - 1];
            else {
              for (var t = 1; t < n / 2; t++) a[t] ^= a[t - 1];
              (o = a[n / 2 - 1]),
                (a[n / 2] ^=
                  d[255 & o] ^
                  (d[(o >> 8) & 255] << 8) ^
                  (d[(o >> 16) & 255] << 16) ^
                  (d[(o >> 24) & 255] << 24));
              for (var t = n / 2 + 1; t < n; t++) a[t] ^= a[t - 1];
            }
            for (var f, p, t = 0; t < n && l < r; )
              (f = l >> 2),
                (p = l % 4),
                (this._Ke[f][p] = a[t]),
                (this._Kd[e - f][p] = a[t++]),
                l++;
          }
          for (var f = 1; f < e; f++)
            for (var p = 0; p < 4; p++)
              (o = this._Kd[f][p]),
                (this._Kd[f][p] =
                  C[(o >> 24) & 255] ^ S[(o >> 16) & 255] ^ A[(o >> 8) & 255] ^ E[255 & o]);
        }),
          (k.prototype.encrypt = function (e) {
            if (16 != e.length) throw Error('invalid plaintext size (must be 16 bytes)');
            for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = T(e), a = 0; a < 4; a++)
              n[a] ^= this._Ke[0][a];
            for (var o = 1; o < t; o++) {
              for (var a = 0; a < 4; a++)
                r[a] =
                  p[(n[a] >> 24) & 255] ^
                  h[(n[(a + 1) % 4] >> 16) & 255] ^
                  y[(n[(a + 2) % 4] >> 8) & 255] ^
                  m[255 & n[(a + 3) % 4]] ^
                  this._Ke[o][a];
              n = r.slice();
            }
            for (var s, l = i(16), a = 0; a < 4; a++)
              (s = this._Ke[t][a]),
                (l[4 * a] = (d[(n[a] >> 24) & 255] ^ (s >> 24)) & 255),
                (l[4 * a + 1] = (d[(n[(a + 1) % 4] >> 16) & 255] ^ (s >> 16)) & 255),
                (l[4 * a + 2] = (d[(n[(a + 2) % 4] >> 8) & 255] ^ (s >> 8)) & 255),
                (l[4 * a + 3] = (d[255 & n[(a + 3) % 4]] ^ s) & 255);
            return l;
          }),
          (k.prototype.decrypt = function (e) {
            if (16 != e.length) throw Error('invalid ciphertext size (must be 16 bytes)');
            for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = T(e), a = 0; a < 4; a++)
              n[a] ^= this._Kd[0][a];
            for (var o = 1; o < t; o++) {
              for (var a = 0; a < 4; a++)
                r[a] =
                  g[(n[a] >> 24) & 255] ^
                  b[(n[(a + 3) % 4] >> 16) & 255] ^
                  w[(n[(a + 2) % 4] >> 8) & 255] ^
                  v[255 & n[(a + 1) % 4]] ^
                  this._Kd[o][a];
              n = r.slice();
            }
            for (var s, l = i(16), a = 0; a < 4; a++)
              (s = this._Kd[t][a]),
                (l[4 * a] = (f[(n[a] >> 24) & 255] ^ (s >> 24)) & 255),
                (l[4 * a + 1] = (f[(n[(a + 3) % 4] >> 16) & 255] ^ (s >> 16)) & 255),
                (l[4 * a + 2] = (f[(n[(a + 2) % 4] >> 8) & 255] ^ (s >> 8)) & 255),
                (l[4 * a + 3] = (f[255 & n[(a + 1) % 4]] ^ s) & 255);
            return l;
          });
        var x = function (e) {
          if (!(this instanceof x)) throw Error('AES must be instanitated with `new`');
          (this.description = 'Electronic Code Block'), (this.name = 'ecb'), (this._aes = new k(e));
        };
        (x.prototype.encrypt = function (e) {
          if ((e = a(e)).length % 16 != 0)
            throw Error('invalid plaintext size (must be multiple of 16 bytes)');
          for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16)
            o(e, r, 0, n, n + 16), o((r = this._aes.encrypt(r)), t, n);
          return t;
        }),
          (x.prototype.decrypt = function (e) {
            if ((e = a(e)).length % 16 != 0)
              throw Error('invalid ciphertext size (must be multiple of 16 bytes)');
            for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16)
              o(e, r, 0, n, n + 16), o((r = this._aes.decrypt(r)), t, n);
            return t;
          });
        var P = function (e, t) {
          if (!(this instanceof P)) throw Error('AES must be instanitated with `new`');
          if (((this.description = 'Cipher Block Chaining'), (this.name = 'cbc'), t)) {
            if (16 != t.length) throw Error('invalid initialation vector size (must be 16 bytes)');
          } else t = i(16);
          (this._lastCipherblock = a(t, !0)), (this._aes = new k(e));
        };
        (P.prototype.encrypt = function (e) {
          if ((e = a(e)).length % 16 != 0)
            throw Error('invalid plaintext size (must be multiple of 16 bytes)');
          for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) {
            o(e, r, 0, n, n + 16);
            for (var s = 0; s < 16; s++) r[s] ^= this._lastCipherblock[s];
            (this._lastCipherblock = this._aes.encrypt(r)), o(this._lastCipherblock, t, n);
          }
          return t;
        }),
          (P.prototype.decrypt = function (e) {
            if ((e = a(e)).length % 16 != 0)
              throw Error('invalid ciphertext size (must be multiple of 16 bytes)');
            for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) {
              o(e, r, 0, n, n + 16), (r = this._aes.decrypt(r));
              for (var s = 0; s < 16; s++) t[n + s] = r[s] ^ this._lastCipherblock[s];
              o(e, this._lastCipherblock, 0, n, n + 16);
            }
            return t;
          });
        var B = function (e, t, r) {
          if (!(this instanceof B)) throw Error('AES must be instanitated with `new`');
          if (((this.description = 'Cipher Feedback'), (this.name = 'cfb'), t)) {
            if (16 != t.length) throw Error('invalid initialation vector size (must be 16 size)');
          } else t = i(16);
          r || (r = 1),
            (this.segmentSize = r),
            (this._shiftRegister = a(t, !0)),
            (this._aes = new k(e));
        };
        (B.prototype.encrypt = function (e) {
          if (e.length % this.segmentSize != 0)
            throw Error('invalid plaintext size (must be segmentSize bytes)');
          for (var t, r = a(e, !0), n = 0; n < r.length; n += this.segmentSize) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= t[i];
            o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
              o(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize);
          }
          return r;
        }),
          (B.prototype.decrypt = function (e) {
            if (e.length % this.segmentSize != 0)
              throw Error('invalid ciphertext size (must be segmentSize bytes)');
            for (var t, r = a(e, !0), n = 0; n < r.length; n += this.segmentSize) {
              t = this._aes.encrypt(this._shiftRegister);
              for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= t[i];
              o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                o(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize);
            }
            return r;
          });
        var D = function (e, t) {
          if (!(this instanceof D)) throw Error('AES must be instanitated with `new`');
          if (((this.description = 'Output Feedback'), (this.name = 'ofb'), t)) {
            if (16 != t.length) throw Error('invalid initialation vector size (must be 16 bytes)');
          } else t = i(16);
          (this._lastPrecipher = a(t, !0)), (this._lastPrecipherIndex = 16), (this._aes = new k(e));
        };
        (D.prototype.encrypt = function (e) {
          for (var t = a(e, !0), r = 0; r < t.length; r++)
            16 === this._lastPrecipherIndex &&
              ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)),
              (this._lastPrecipherIndex = 0)),
              (t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++]);
          return t;
        }),
          (D.prototype.decrypt = D.prototype.encrypt);
        var I = function (e) {
          if (!(this instanceof I)) throw Error('Counter must be instanitated with `new`');
          0 === e || e || (e = 1),
            'number' == typeof e ? ((this._counter = i(16)), this.setValue(e)) : this.setBytes(e);
        };
        (I.prototype.setValue = function (e) {
          if ('number' != typeof e || parseInt(e) != e)
            throw Error('invalid counter value (must be an integer)');
          for (var t = 15; t >= 0; --t) (this._counter[t] = e % 256), (e >>= 8);
        }),
          (I.prototype.setBytes = function (e) {
            if (16 != (e = a(e, !0)).length)
              throw Error('invalid counter bytes size (must be 16 bytes)');
            this._counter = e;
          }),
          (I.prototype.increment = function () {
            for (var e = 15; e >= 0; e--)
              if (255 === this._counter[e]) this._counter[e] = 0;
              else {
                this._counter[e]++;
                break;
              }
          });
        var R = function (e, t) {
          if (!(this instanceof R)) throw Error('AES must be instanitated with `new`');
          (this.description = 'Counter'),
            (this.name = 'ctr'),
            t instanceof I || (t = new I(t)),
            (this._counter = t),
            (this._remainingCounter = null),
            (this._remainingCounterIndex = 16),
            (this._aes = new k(e));
        };
        (R.prototype.encrypt = function (e) {
          for (var t = a(e, !0), r = 0; r < t.length; r++)
            16 === this._remainingCounterIndex &&
              ((this._remainingCounter = this._aes.encrypt(this._counter._counter)),
              (this._remainingCounterIndex = 0),
              this._counter.increment()),
              (t[r] ^= this._remainingCounter[this._remainingCounterIndex++]);
          return t;
        }),
          (R.prototype.decrypt = R.prototype.encrypt),
          (e.exports = {
            AES: k,
            Counter: I,
            ModeOfOperation: { ecb: x, cbc: P, cfb: B, ofb: D, ctr: R },
            utils: {
              hex: l,
              utf8: {
                toBytes: function (e) {
                  var t = [],
                    r = 0;
                  for (e = encodeURI(e); r < e.length; ) {
                    var n = e.charCodeAt(r++);
                    37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), (r += 2)) : t.push(n);
                  }
                  return a(t);
                },
                fromBytes: function (e) {
                  for (var t = [], r = 0; r < e.length; ) {
                    var n = e[r];
                    n < 128
                      ? (t.push(String.fromCharCode(n)), r++)
                      : n > 191 && n < 224
                        ? (t.push(String.fromCharCode(((31 & n) << 6) | (63 & e[r + 1]))), (r += 2))
                        : (t.push(
                            String.fromCharCode(
                              ((15 & n) << 12) | ((63 & e[r + 1]) << 6) | (63 & e[r + 2])
                            )
                          ),
                          (r += 3));
                  }
                  return t.join('');
                },
              },
            },
            padding: {
              pkcs7: {
                pad: function (e) {
                  var t = 16 - ((e = a(e, !0)).length % 16),
                    r = i(e.length + t);
                  o(e, r);
                  for (var n = e.length; n < r.length; n++) r[n] = t;
                  return r;
                },
                strip: function (e) {
                  if ((e = a(e, !0)).length < 16) throw Error('PKCS#7 invalid length');
                  var t = e[e.length - 1];
                  if (t > 16) throw Error('PKCS#7 padding byte out of range');
                  for (var r = e.length - t, n = 0; n < t; n++)
                    if (e[r + n] !== t) throw Error('PKCS#7 invalid padding byte');
                  var s = i(r);
                  return o(e, s, 0, 0, r), s;
                },
              },
            },
            _arrayTest: { coerceArray: a, createArray: i, copyArray: o },
          });
      })(0);
    },
    37262: function (e) {
      !(function (t) {
        function r(e) {
          let t = new Uint32Array([
              1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
              2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
              2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
              1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
              3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
              3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734,
              506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
              1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
              3329325298,
            ]),
            r = 1779033703,
            n = 3144134277,
            a = 1013904242,
            i = 2773480762,
            o = 1359893119,
            s = 2600822924,
            l = 528734635,
            c = 1541459225,
            u = new Uint32Array(64);
          function d(e) {
            let d = 0,
              f = e.length;
            for (; f >= 64; ) {
              let p = r,
                h = n,
                y = a,
                m = i,
                g = o,
                b = s,
                w = l,
                v = c,
                C,
                S,
                A,
                E,
                T;
              for (S = 0; S < 16; S++)
                (A = d + 4 * S),
                  (u[S] =
                    ((255 & e[A]) << 24) |
                    ((255 & e[A + 1]) << 16) |
                    ((255 & e[A + 2]) << 8) |
                    (255 & e[A + 3]));
              for (S = 16; S < 64; S++)
                (E = (((C = u[S - 2]) >>> 17) | (C << 15)) ^ ((C >>> 19) | (C << 13)) ^ (C >>> 10)),
                  (T =
                    (((C = u[S - 15]) >>> 7) | (C << 25)) ^ ((C >>> 18) | (C << 14)) ^ (C >>> 3)),
                  (u[S] = (((E + u[S - 7]) | 0) + ((T + u[S - 16]) | 0)) | 0);
              for (S = 0; S < 64; S++)
                (E =
                  ((((((g >>> 6) | (g << 26)) ^
                    ((g >>> 11) | (g << 21)) ^
                    ((g >>> 25) | (g << 7))) +
                    ((g & b) ^ (~g & w))) |
                    0) +
                    ((v + ((t[S] + u[S]) | 0)) | 0)) |
                  0),
                  (T =
                    ((((p >>> 2) | (p << 30)) ^
                      ((p >>> 13) | (p << 19)) ^
                      ((p >>> 22) | (p << 10))) +
                      ((p & h) ^ (p & y) ^ (h & y))) |
                    0),
                  (v = w),
                  (w = b),
                  (b = g),
                  (g = (m + E) | 0),
                  (m = y),
                  (y = h),
                  (h = p),
                  (p = (E + T) | 0);
              (r = (r + p) | 0),
                (n = (n + h) | 0),
                (a = (a + y) | 0),
                (i = (i + m) | 0),
                (o = (o + g) | 0),
                (s = (s + b) | 0),
                (l = (l + w) | 0),
                (c = (c + v) | 0),
                (d += 64),
                (f -= 64);
            }
          }
          d(e);
          let f,
            p = e.length % 64,
            h = (e.length / 536870912) | 0,
            y = e.length << 3,
            m = p < 56 ? 56 : 120,
            g = e.slice(e.length - p, e.length);
          for (g.push(128), f = p + 1; f < m; f++) g.push(0);
          return (
            g.push((h >>> 24) & 255),
            g.push((h >>> 16) & 255),
            g.push((h >>> 8) & 255),
            g.push((h >>> 0) & 255),
            g.push((y >>> 24) & 255),
            g.push((y >>> 16) & 255),
            g.push((y >>> 8) & 255),
            g.push((y >>> 0) & 255),
            d(g),
            [
              (r >>> 24) & 255,
              (r >>> 16) & 255,
              (r >>> 8) & 255,
              (r >>> 0) & 255,
              (n >>> 24) & 255,
              (n >>> 16) & 255,
              (n >>> 8) & 255,
              (n >>> 0) & 255,
              (a >>> 24) & 255,
              (a >>> 16) & 255,
              (a >>> 8) & 255,
              (a >>> 0) & 255,
              (i >>> 24) & 255,
              (i >>> 16) & 255,
              (i >>> 8) & 255,
              (i >>> 0) & 255,
              (o >>> 24) & 255,
              (o >>> 16) & 255,
              (o >>> 8) & 255,
              (o >>> 0) & 255,
              (s >>> 24) & 255,
              (s >>> 16) & 255,
              (s >>> 8) & 255,
              (s >>> 0) & 255,
              (l >>> 24) & 255,
              (l >>> 16) & 255,
              (l >>> 8) & 255,
              (l >>> 0) & 255,
              (c >>> 24) & 255,
              (c >>> 16) & 255,
              (c >>> 8) & 255,
              (c >>> 0) & 255,
            ]
          );
        }
        function n(e, t, n) {
          let a;
          e = e.length <= 64 ? e : r(e);
          let i = 64 + t.length + 4,
            o = Array(i),
            s = Array(64),
            l = [];
          for (a = 0; a < 64; a++) o[a] = 54;
          for (a = 0; a < e.length; a++) o[a] ^= e[a];
          for (a = 0; a < t.length; a++) o[64 + a] = t[a];
          for (a = i - 4; a < i; a++) o[a] = 0;
          for (a = 0; a < 64; a++) s[a] = 92;
          for (a = 0; a < e.length; a++) s[a] ^= e[a];
          function c() {
            for (let e = i - 1; e >= i - 4; e--) {
              if ((o[e]++, o[e] <= 255)) return;
              o[e] = 0;
            }
          }
          for (; n >= 32; ) c(), (l = l.concat(r(s.concat(r(o))))), (n -= 32);
          return n > 0 && (c(), (l = l.concat(r(s.concat(r(o))).slice(0, n)))), l;
        }
        function a(e, t, r, n, a) {
          let l;
          for (s(e, (2 * r - 1) * 16, a, 0, 16), l = 0; l < 2 * r; l++)
            o(e, 16 * l, a, 16),
              (function (e, t) {
                s(e, 0, t, 0, 16);
                for (let e = 8; e > 0; e -= 2)
                  (t[4] ^= i(t[0] + t[12], 7)),
                    (t[8] ^= i(t[4] + t[0], 9)),
                    (t[12] ^= i(t[8] + t[4], 13)),
                    (t[0] ^= i(t[12] + t[8], 18)),
                    (t[9] ^= i(t[5] + t[1], 7)),
                    (t[13] ^= i(t[9] + t[5], 9)),
                    (t[1] ^= i(t[13] + t[9], 13)),
                    (t[5] ^= i(t[1] + t[13], 18)),
                    (t[14] ^= i(t[10] + t[6], 7)),
                    (t[2] ^= i(t[14] + t[10], 9)),
                    (t[6] ^= i(t[2] + t[14], 13)),
                    (t[10] ^= i(t[6] + t[2], 18)),
                    (t[3] ^= i(t[15] + t[11], 7)),
                    (t[7] ^= i(t[3] + t[15], 9)),
                    (t[11] ^= i(t[7] + t[3], 13)),
                    (t[15] ^= i(t[11] + t[7], 18)),
                    (t[1] ^= i(t[0] + t[3], 7)),
                    (t[2] ^= i(t[1] + t[0], 9)),
                    (t[3] ^= i(t[2] + t[1], 13)),
                    (t[0] ^= i(t[3] + t[2], 18)),
                    (t[6] ^= i(t[5] + t[4], 7)),
                    (t[7] ^= i(t[6] + t[5], 9)),
                    (t[4] ^= i(t[7] + t[6], 13)),
                    (t[5] ^= i(t[4] + t[7], 18)),
                    (t[11] ^= i(t[10] + t[9], 7)),
                    (t[8] ^= i(t[11] + t[10], 9)),
                    (t[9] ^= i(t[8] + t[11], 13)),
                    (t[10] ^= i(t[9] + t[8], 18)),
                    (t[12] ^= i(t[15] + t[14], 7)),
                    (t[13] ^= i(t[12] + t[15], 9)),
                    (t[14] ^= i(t[13] + t[12], 13)),
                    (t[15] ^= i(t[14] + t[13], 18));
                for (let r = 0; r < 16; ++r) e[r] += t[r];
              })(a, n),
              s(a, 0, e, t + 16 * l, 16);
          for (l = 0; l < r; l++) s(e, t + 32 * l, e, 16 * l, 16);
          for (l = 0; l < r; l++) s(e, t + (2 * l + 1) * 16, e, (l + r) * 16, 16);
        }
        function i(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function o(e, t, r, n) {
          for (let a = 0; a < n; a++) r[a] ^= e[t + a];
        }
        function s(e, t, r, n, a) {
          for (; a--; ) r[n++] = e[t++];
        }
        function l(e) {
          if (!e || 'number' != typeof e.length) return !1;
          for (let t = 0; t < e.length; t++) {
            let r = e[t];
            if ('number' != typeof r || r % 1 || r < 0 || r >= 256) return !1;
          }
          return !0;
        }
        function c(e, t) {
          if ('number' != typeof e || e % 1) throw Error('invalid ' + t);
          return e;
        }
        function u(e, t, r, i, u, d, f) {
          let p;
          if (
            ((r = c(r, 'N')),
            (i = c(i, 'r')),
            (u = c(u, 'p')),
            (d = c(d, 'dkLen')),
            0 === r || (r & (r - 1)) != 0)
          )
            throw Error('N must be power of 2');
          if (r > 2147483647 / 128 / i) throw Error('N too large');
          if (i > 2147483647 / 128 / u) throw Error('r too large');
          if (!l(e)) throw Error('password must be an array or buffer');
          if (((e = Array.prototype.slice.call(e)), !l(t)))
            throw Error('salt must be an array or buffer');
          t = Array.prototype.slice.call(t);
          let h = n(e, t, 128 * u * i),
            y = new Uint32Array(32 * u * i);
          for (let e = 0; e < y.length; e++) {
            let t = 4 * e;
            y[e] =
              ((255 & h[t + 3]) << 24) |
              ((255 & h[t + 2]) << 16) |
              ((255 & h[t + 1]) << 8) |
              ((255 & h[t + 0]) << 0);
          }
          let m = new Uint32Array(64 * i),
            g = new Uint32Array(32 * i * r),
            b = 32 * i,
            w = new Uint32Array(16),
            v = new Uint32Array(16),
            C = u * r * 2,
            S = 0,
            A = null,
            E = !1,
            T = 0,
            k = 0,
            x,
            P = f ? parseInt(1e3 / i) : 4294967295,
            B = 'undefined' != typeof setImmediate ? setImmediate : setTimeout,
            D = function () {
              let t;
              if (E) return f(Error('cancelled'), S / C);
              switch (T) {
                case 0:
                  s(y, (p = 32 * k * i), m, 0, b), (T = 1), (x = 0);
                case 1:
                  (t = r - x) > P && (t = P);
                  for (let e = 0; e < t; e++) s(m, 0, g, (x + e) * b, b), a(m, b, i, w, v);
                  if (((x += t), (S += t), f)) {
                    let e = parseInt((1e3 * S) / C);
                    if (e !== A) {
                      if ((E = f(null, S / C))) break;
                      A = e;
                    }
                  }
                  if (x < r) break;
                  (x = 0), (T = 2);
                case 2:
                  (t = r - x) > P && (t = P);
                  for (let e = 0; e < t; e++)
                    o(g, (m[(2 * i - 1) * 16] & (r - 1)) * b, m, b), a(m, b, i, w, v);
                  if (((x += t), (S += t), f)) {
                    let e = parseInt((1e3 * S) / C);
                    if (e !== A) {
                      if ((E = f(null, S / C))) break;
                      A = e;
                    }
                  }
                  if (x < r) break;
                  if ((s(m, 0, y, p, b), ++k < u)) {
                    T = 0;
                    break;
                  }
                  h = [];
                  for (let e = 0; e < y.length; e++)
                    h.push((y[e] >> 0) & 255),
                      h.push((y[e] >> 8) & 255),
                      h.push((y[e] >> 16) & 255),
                      h.push((y[e] >> 24) & 255);
                  let l = n(e, h, d);
                  return f && f(null, 1, l), l;
              }
              f && B(D);
            };
          if (!f)
            for (;;) {
              let e = D();
              if (void 0 != e) return e;
            }
          D();
        }
        e.exports = {
          scrypt: function (e, t, r, n, a, i, o) {
            return new Promise(function (s, l) {
              let c = 0;
              o && o(0),
                u(e, t, r, n, a, i, function (e, t, r) {
                  if (e) l(e);
                  else if (r) o && 1 !== c && o(1), s(new Uint8Array(r));
                  else if (o && t !== c) return (c = t), o(t);
                });
            });
          },
          syncScrypt: function (e, t, r, n, a, i) {
            return new Uint8Array(u(e, t, r, n, a, i));
          },
        };
      })(0);
    },
    79716: function (e, t, r) {
      r.d(t, {
        o: function () {
          return a;
        },
      });
      class n extends Error {}
      function a(e, t) {
        let r;
        if ('string' != typeof e) throw new n('Invalid token specified: must be a string');
        t || (t = {});
        let a = !0 === t.header ? 0 : 1,
          i = e.split('.')[a];
        if ('string' != typeof i) throw new n(`Invalid token specified: missing part #${a + 1}`);
        try {
          r = (function (e) {
            let t = e.replace(/-/g, '+').replace(/_/g, '/');
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += '==';
                break;
              case 3:
                t += '=';
                break;
              default:
                throw Error('base64 string is not of the correct length');
            }
            try {
              var r;
              return (
                (r = t),
                decodeURIComponent(
                  atob(r).replace(/(.)/g, (e, t) => {
                    let r = t.charCodeAt(0).toString(16).toUpperCase();
                    return r.length < 2 && (r = '0' + r), '%' + r;
                  })
                )
              );
            } catch (e) {
              return atob(t);
            }
          })(i);
        } catch (e) {
          throw new n(`Invalid token specified: invalid base64 for part #${a + 1} (${e.message})`);
        }
        try {
          return JSON.parse(r);
        } catch (e) {
          throw new n(`Invalid token specified: invalid json for part #${a + 1} (${e.message})`);
        }
      }
      n.prototype.name = 'InvalidTokenError';
    },
    22402: function (e, t, r) {
      r.d(t, {
        z: function () {
          return s;
        },
      });
      let n = new Map(),
        a = new Map();
      async function i(e, { cacheKey: t, cacheTime: r = Number.POSITIVE_INFINITY }) {
        let i = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (r) => t.set(e, r),
              }),
              r = t(e, n),
              i = t(e, a);
            return {
              clear: () => {
                r.clear(), i.clear();
              },
              promise: r,
              response: i,
            };
          })(t),
          o = i.response.get();
        if (o && r > 0 && new Date().getTime() - o.created.getTime() < r) return o.data;
        let s = i.promise.get();
        s || ((s = e()), i.promise.set(s));
        try {
          let e = await s;
          return i.response.set({ created: new Date(), data: e }), e;
        } finally {
          i.promise.clear();
        }
      }
      let o = (e) => `blockNumber.${e}`;
      async function s(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await i(() => e.request({ method: 'eth_blockNumber' }), {
            cacheKey: o(e.uid),
            cacheTime: t,
          })
        );
      }
    },
    57480: function (e, t, r) {
      r.d(t, {
        C: function () {
          return a;
        },
      });
      var n = r(79150);
      async function a(e, { address: t, blockNumber: r, blockTag: a = 'latest' }) {
        let i = void 0 !== r ? (0, n.eC)(r) : void 0,
          o = await e.request({ method: 'eth_getCode', params: [t, i || a] }, { dedupe: !!i });
        if ('0x' !== o) return o;
      }
    },
    67328: function (e, t, r) {
      r.d(t, {
        f: function () {
          return o;
        },
      });
      var n = r(59134),
        a = r(79150),
        i = r(85148);
      async function o(e, { blockHash: t, blockNumber: r, blockTag: o, hash: s, index: l }) {
        let c = o || 'latest',
          u = void 0 !== r ? (0, a.eC)(r) : void 0,
          d = null;
        if (
          (s
            ? (d = await e.request(
                { method: 'eth_getTransactionByHash', params: [s] },
                { dedupe: !0 }
              ))
            : t
              ? (d = await e.request(
                  { method: 'eth_getTransactionByBlockHashAndIndex', params: [t, (0, a.eC)(l)] },
                  { dedupe: !0 }
                ))
              : (u || c) &&
                (d = await e.request(
                  {
                    method: 'eth_getTransactionByBlockNumberAndIndex',
                    params: [u || c, (0, a.eC)(l)],
                  },
                  { dedupe: !!u }
                )),
          !d)
        )
          throw new n.Bh({ blockHash: t, blockNumber: r, blockTag: c, hash: s, index: l });
        return (e.chain?.formatters?.transaction?.format || i.Tr)(d);
      }
    },
    96544: function (e, t, r) {
      r.d(t, {
        a: function () {
          return i;
        },
      });
      var n = r(59134),
        a = r(48166);
      async function i(e, { hash: t }) {
        let r = await e.request(
          { method: 'eth_getTransactionReceipt', params: [t] },
          { dedupe: !0 }
        );
        if (!r) throw new n.Yb({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || a.fA)(r);
      }
    },
    8055: function (e, t, r) {
      r.d(t, {
        A: function () {
          return p;
        },
      });
      var n = r(13317),
        a = r(6153),
        i = r(77854),
        o = r(22262),
        s = r(31359),
        l = r(48666),
        c = r(70731),
        u = r(45123),
        d = r(72427),
        f = r(70542);
      async function p(e, t) {
        let {
            allowFailure: r = !0,
            batchSize: p,
            blockNumber: h,
            blockTag: y,
            multicallAddress: m,
            stateOverride: g,
          } = t,
          b = t.contracts,
          w = p ?? (('object' == typeof e.batch?.multicall && e.batch.multicall.batchSize) || 1024),
          v = m;
        if (!v) {
          if (!e.chain) throw Error('client chain not configured. multicallAddress is required.');
          v = (0, c.L)({ blockNumber: h, chain: e.chain, contract: 'multicall3' });
        }
        let C = [[]],
          S = 0,
          A = 0;
        for (let e = 0; e < b.length; e++) {
          let { abi: t, address: n, args: a, functionName: i } = b[e];
          try {
            let e = (0, l.R)({ abi: t, args: a, functionName: i });
            (A += (e.length - 2) / 2),
              w > 0 && A > w && C[S].length > 0 && (S++, (A = (e.length - 2) / 2), (C[S] = [])),
              (C[S] = [...C[S], { allowFailure: !0, callData: e, target: n }]);
          } catch (o) {
            let e = (0, u.S)(o, {
              abi: t,
              address: n,
              args: a,
              docsPath: '/docs/contract/multicall',
              functionName: i,
            });
            if (!r) throw e;
            C[S] = [...C[S], { allowFailure: !0, callData: '0x', target: n }];
          }
        }
        let E = await Promise.allSettled(
            C.map((t) =>
              (0, d.s)(
                e,
                f.L,
                'readContract'
              )({
                abi: n.F8,
                address: v,
                args: [t],
                blockNumber: h,
                blockTag: y,
                functionName: 'aggregate3',
                stateOverride: g,
              })
            )
          ),
          T = [];
        for (let e = 0; e < E.length; e++) {
          let t = E[e];
          if ('rejected' === t.status) {
            if (!r) throw t.reason;
            for (let r = 0; r < C[e].length; r++)
              T.push({ status: 'failure', error: t.reason, result: void 0 });
            continue;
          }
          let n = t.value;
          for (let t = 0; t < n.length; t++) {
            let { returnData: i, success: l } = n[t],
              { callData: c } = C[e][t],
              { abi: d, address: f, functionName: p, args: h } = b[T.length];
            try {
              if ('0x' === c) throw new a.wb();
              if (!l) throw new o.VQ({ data: i });
              let e = (0, s.k)({ abi: d, args: h, data: i, functionName: p });
              T.push(r ? { result: e, status: 'success' } : e);
            } catch (t) {
              let e = (0, u.S)(t, {
                abi: d,
                address: f,
                args: h,
                docsPath: '/docs/contract/multicall',
                functionName: p,
              });
              if (!r) throw e;
              T.push({ error: e, result: void 0, status: 'failure' });
            }
          }
        }
        if (T.length !== b.length) throw new i.G('multicall results mismatch');
        return T;
      }
    },
    83753: function (e, t, r) {
      r.d(t, {
        a: function () {
          return c;
        },
      });
      var n = r(39858),
        a = r(31359),
        i = r(48666),
        o = r(45123),
        s = r(72427),
        l = r(19934);
      async function c(e, t) {
        let { abi: r, address: c, args: u, dataSuffix: d, functionName: f, ...p } = t,
          h = p.account ? (0, n.T)(p.account) : e.account,
          y = (0, i.R)({ abi: r, args: u, functionName: f });
        try {
          let { data: n } = await (0, s.s)(
              e,
              l.R,
              'call'
            )({ batch: !1, data: `${y}${d ? d.replace('0x', '') : ''}`, to: c, ...p, account: h }),
            i = (0, a.k)({ abi: r, args: u, functionName: f, data: n || '0x' }),
            o = r.filter((e) => 'name' in e && e.name === t.functionName);
          return {
            result: i,
            request: {
              abi: o,
              address: c,
              args: u,
              dataSuffix: d,
              functionName: f,
              ...p,
              account: h,
            },
          };
        } catch (e) {
          throw (0, o.S)(e, {
            abi: r,
            address: c,
            args: u,
            docsPath: '/docs/contract/simulateContract',
            functionName: f,
            sender: h?.address,
          });
        }
      }
    },
    1944: function (e, t, r) {
      r.d(t, {
        e: function () {
          return h;
        },
      });
      var n = r(41630),
        a = r(59134),
        i = r(72427),
        o = r(6675),
        s = r(42816),
        l = r(58905),
        c = r(45679),
        u = r(97046),
        d = r(67328),
        f = r(96544),
        p = r(75973);
      async function h(
        e,
        {
          confirmations: t = 1,
          hash: r,
          onReplaced: h,
          pollingInterval: y = e.pollingInterval,
          retryCount: m = 6,
          retryDelay: g = ({ count: e }) => 200 * ~~(1 << e),
          timeout: b = 18e4,
        }
      ) {
        let w, v, C;
        let S = (0, c.P)(['waitForTransactionReceipt', e.uid, r]),
          A = !1,
          { promise: E, resolve: T, reject: k } = (0, s.n)(),
          x = b ? setTimeout(() => k(new a.mc({ hash: r })), b) : void 0,
          P = (0, o.N7)(S, { onReplaced: h, resolve: T, reject: k }, (o) => {
            let s = (0, i.s)(
              e,
              p.q,
              'watchBlockNumber'
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: y,
              async onBlockNumber(c) {
                let p = (e) => {
                    clearTimeout(x), s(), e(), P();
                  },
                  h = c;
                if (!A)
                  try {
                    if (C) {
                      if (t > 1 && (!C.blockNumber || h - C.blockNumber + 1n < t)) return;
                      p(() => o.resolve(C));
                      return;
                    }
                    if (
                      (w ||
                        ((A = !0),
                        await (0, l.J)(
                          async () => {
                            (w = await (0, i.s)(e, d.f, 'getTransaction')({ hash: r }))
                              .blockNumber && (h = w.blockNumber);
                          },
                          { delay: g, retryCount: m }
                        ),
                        (A = !1)),
                      (C = await (0, i.s)(e, f.a, 'getTransactionReceipt')({ hash: r })),
                      t > 1 && (!C.blockNumber || h - C.blockNumber + 1n < t))
                    )
                      return;
                    p(() => o.resolve(C));
                  } catch (r) {
                    if (r instanceof a.Bh || r instanceof a.Yb) {
                      if (!w) {
                        A = !1;
                        return;
                      }
                      try {
                        (v = w), (A = !0);
                        let r = await (0, l.J)(
                          () =>
                            (0, i.s)(
                              e,
                              u.Q,
                              'getBlock'
                            )({ blockNumber: h, includeTransactions: !0 }),
                          {
                            delay: g,
                            retryCount: m,
                            shouldRetry: ({ error: e }) => e instanceof n.f,
                          }
                        );
                        A = !1;
                        let a = r.transactions.find(
                          ({ from: e, nonce: t }) => e === v.from && t === v.nonce
                        );
                        if (
                          !a ||
                          ((C = await (0, i.s)(e, f.a, 'getTransactionReceipt')({ hash: a.hash })),
                          t > 1 && (!C.blockNumber || h - C.blockNumber + 1n < t))
                        )
                          return;
                        let s = 'replaced';
                        a.to === v.to && a.value === v.value && a.input === v.input
                          ? (s = 'repriced')
                          : a.from === a.to && 0n === a.value && (s = 'cancelled'),
                          p(() => {
                            o.onReplaced?.({
                              reason: s,
                              replacedTransaction: v,
                              transaction: a,
                              transactionReceipt: C,
                            }),
                              o.resolve(C);
                          });
                      } catch (e) {
                        p(() => o.reject(e));
                      }
                    } else p(() => o.reject(r));
                  }
              },
            });
          });
        return E;
      }
    },
    75973: function (e, t, r) {
      r.d(t, {
        q: function () {
          return c;
        },
      });
      var n = r(37968),
        a = r(72427),
        i = r(6675),
        o = r(84656),
        s = r(45679),
        l = r(22402);
      function c(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: r = !1,
          onBlockNumber: c,
          onError: u,
          poll: d,
          pollingInterval: f = e.pollingInterval,
        }
      ) {
        let p;
        return (
          void 0 !== d
            ? d
            : 'webSocket' !== e.transport.type &&
              ('fallback' !== e.transport.type ||
                'webSocket' !== e.transport.transports[0].config.type)
        )
          ? (() => {
              let n = (0, s.P)(['watchBlockNumber', e.uid, t, r, f]);
              return (0, i.N7)(n, { onBlockNumber: c, onError: u }, (n) =>
                (0, o.$)(
                  async () => {
                    try {
                      let t = await (0, a.s)(e, l.z, 'getBlockNumber')({ cacheTime: 0 });
                      if (p) {
                        if (t === p) return;
                        if (t - p > 1 && r)
                          for (let e = p + 1n; e < t; e++) n.onBlockNumber(e, p), (p = e);
                      }
                      (!p || t > p) && (n.onBlockNumber(t, p), (p = t));
                    } catch (e) {
                      n.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: f }
                )
              );
            })()
          : (() => {
              let a = (0, s.P)(['watchBlockNumber', e.uid, t, r]);
              return (0, i.N7)(a, { onBlockNumber: c, onError: u }, (t) => {
                let r = !0,
                  a = () => (r = !1);
                return (
                  (async () => {
                    try {
                      let i = (() => {
                          if ('fallback' === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => 'webSocket' === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: o } = await i.subscribe({
                          params: ['newHeads'],
                          onData(e) {
                            if (!r) return;
                            let a = (0, n.y_)(e.result?.number);
                            t.onBlockNumber(a, p), (p = a);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (a = o), r || a();
                    } catch (e) {
                      u?.(e);
                    }
                  })(),
                  () => a()
                );
              });
            })();
      }
    },
    5290: function (e, t, r) {
      r.d(t, {
        p: function () {
          return n;
        },
      });
      async function n(e, { serializedTransaction: t }) {
        return e.request({ method: 'eth_sendRawTransaction', params: [t] }, { retryCount: 0 });
      }
    },
    81288: function (e, t, r) {
      r.d(t, {
        T: function () {
          return b;
        },
      });
      var n = r(39858),
        a = r(83094),
        i = r(77854),
        o = r(15825),
        s = r(88982),
        l = r(35970),
        c = r(40639),
        u = r(14999),
        d = r(72427),
        f = r(65414),
        p = r(64233),
        h = r(59383),
        y = r(6257),
        m = r(5290);
      let g = new f.k(128);
      async function b(e, t) {
        let {
          account: r = e.account,
          chain: f = e.chain,
          accessList: b,
          authorizationList: w,
          blobs: v,
          data: C,
          gas: S,
          gasPrice: A,
          maxFeePerBlobGas: E,
          maxFeePerGas: T,
          maxPriorityFeePerGas: k,
          nonce: x,
          value: P,
          ...B
        } = t;
        if (void 0 === r) throw new a.o({ docsPath: '/docs/actions/wallet/sendTransaction' });
        let D = r ? (0, n.T)(r) : null;
        try {
          (0, p.F)(t);
          let r = await (async () =>
            t.to
              ? t.to
              : w && w.length > 0
                ? await (0, o.z)({ authorization: w[0] }).catch(() => {
                    throw new i.G('`to` is required. Could not infer from `authorizationList`.');
                  })
                : void 0)();
          if (D?.type === 'json-rpc' || null === D) {
            let t;
            null !== f &&
              ((t = await (0, d.s)(e, h.L, 'getChainId')({})),
              (0, s.q)({ currentChainId: t, chain: f }));
            let n = e.chain?.formatters?.transactionRequest?.format,
              a = (n || u.tG)({
                ...(0, c.K)(B, { format: n }),
                accessList: b,
                authorizationList: w,
                blobs: v,
                chainId: t,
                data: C,
                from: D?.address,
                gas: S,
                gasPrice: A,
                maxFeePerBlobGas: E,
                maxFeePerGas: T,
                maxPriorityFeePerGas: k,
                nonce: x,
                to: r,
                value: P,
              }),
              i = g.get(e.uid);
            try {
              return await e.request(
                { method: i ? 'wallet_sendTransaction' : 'eth_sendTransaction', params: [a] },
                { retryCount: 0 }
              );
            } catch (t) {
              if (!1 === i) throw t;
              if (
                'InvalidInputRpcError' === t.name ||
                'InvalidParamsRpcError' === t.name ||
                'MethodNotFoundRpcError' === t.name ||
                'MethodNotSupportedRpcError' === t.name
              )
                return await e
                  .request({ method: 'wallet_sendTransaction', params: [a] }, { retryCount: 0 })
                  .then((t) => (g.set(e.uid, !0), t))
                  .catch((r) => {
                    if (
                      'MethodNotFoundRpcError' === r.name ||
                      'MethodNotSupportedRpcError' === r.name
                    )
                      throw (g.set(e.uid, !1), t);
                    throw r;
                  });
              throw t;
            }
          }
          if (D?.type === 'local') {
            let t = await (0, d.s)(
                e,
                y.ZE,
                'prepareTransactionRequest'
              )({
                account: D,
                accessList: b,
                authorizationList: w,
                blobs: v,
                chain: f,
                data: C,
                gas: S,
                gasPrice: A,
                maxFeePerBlobGas: E,
                maxFeePerGas: T,
                maxPriorityFeePerGas: k,
                nonce: x,
                nonceManager: D.nonceManager,
                parameters: [...y.QZ, 'sidecars'],
                value: P,
                ...B,
                to: r,
              }),
              n = f?.serializers?.transaction,
              a = await D.signTransaction(t, { serializer: n });
            return await (0, d.s)(e, m.p, 'sendRawTransaction')({ serializedTransaction: a });
          }
          if (D?.type === 'smart')
            throw new a.Y({
              metaMessages: ['Consider using the `sendUserOperation` Action instead.'],
              docsPath: '/docs/actions/bundler/sendUserOperation',
              type: 'smart',
            });
          throw new a.Y({ docsPath: '/docs/actions/wallet/sendTransaction', type: D?.type });
        } catch (e) {
          if (e instanceof a.Y) throw e;
          throw (0, l.$)(e, { ...t, account: D, chain: t.chain || void 0 });
        }
      }
    },
    83559: function (e, t, r) {
      r.d(t, {
        n: function () {
          return c;
        },
      });
      var n = r(39858),
        a = r(83094),
        i = r(48666),
        o = r(45123),
        s = r(72427),
        l = r(81288);
      async function c(e, t) {
        let {
          abi: r,
          account: c = e.account,
          address: u,
          args: d,
          dataSuffix: f,
          functionName: p,
          ...h
        } = t;
        if (void 0 === c) throw new a.o({ docsPath: '/docs/contract/writeContract' });
        let y = c ? (0, n.T)(c) : null,
          m = (0, i.R)({ abi: r, args: d, functionName: p });
        try {
          return await (0, s.s)(
            e,
            l.T,
            'sendTransaction'
          )({ data: `${m}${f ? f.replace('0x', '') : ''}`, to: u, account: y, ...h });
        } catch (e) {
          throw (0, o.S)(e, {
            abi: r,
            address: u,
            args: d,
            docsPath: '/docs/contract/writeContract',
            functionName: p,
            sender: y?.address,
          });
        }
      }
    },
    91782: function (e, t, r) {
      r.d(t, {
        v: function () {
          return t0;
        },
      });
      var n = r(79951),
        a = r(44385),
        i = r(79609),
        o = r(84770),
        s = r(70731),
        l = r(79150),
        c = r(80097),
        u = r(72427),
        d = r(70542);
      async function f(e, { blockNumber: t, blockTag: r, name: n, universalResolverAddress: a }) {
        let i = a;
        if (!i) {
          if (!e.chain)
            throw Error('client chain not configured. universalResolverAddress is required.');
          i = (0, s.L)({ blockNumber: t, chain: e.chain, contract: 'ensUniversalResolver' });
        }
        let [o] = await (0, u.s)(
          e,
          d.L,
          'readContract'
        )({
          address: i,
          abi: [
            {
              inputs: [{ type: 'bytes' }],
              name: 'findResolver',
              outputs: [{ type: 'address' }, { type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
          ],
          functionName: 'findResolver',
          args: [(0, l.NC)((0, c.T)(n))],
          blockNumber: t,
          blockTag: r,
        });
        return o;
      }
      var p = r(62120),
        h = r(19934),
        y = r(39858),
        m = r(41524),
        g = r(40639),
        b = r(14999),
        w = r(64233);
      async function v(e, t) {
        let {
            account: r = e.account,
            blockNumber: n,
            blockTag: a = 'latest',
            blobs: i,
            data: o,
            gas: s,
            gasPrice: c,
            maxFeePerBlobGas: u,
            maxFeePerGas: d,
            maxPriorityFeePerGas: f,
            to: p,
            value: h,
            ...v
          } = t,
          C = r ? (0, y.T)(r) : void 0;
        try {
          (0, w.F)(t);
          let r = n ? (0, l.eC)(n) : void 0,
            y = e.chain?.formatters?.transactionRequest?.format,
            m = (y || b.tG)({
              ...(0, g.K)(v, { format: y }),
              from: C?.address,
              blobs: i,
              data: o,
              gas: s,
              gasPrice: c,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: f,
              to: p,
              value: h,
            }),
            S = await e.request({ method: 'eth_createAccessList', params: [m, r || a] });
          return { accessList: S.accessList, gasUsed: BigInt(S.gasUsed) };
        } catch (r) {
          throw (0, m.P)(r, { ...t, account: C, chain: e.chain });
        }
      }
      function C(e, { method: t }) {
        let r = {};
        return (
          'fallback' === e.transport.type &&
            e.transport.onResponse?.(({ method: e, response: n, status: a, transport: i }) => {
              'success' === a && t === e && (r[n] = i.request);
            }),
          (t) => r[t] || e.request
        );
      }
      async function S(e) {
        let t = C(e, { method: 'eth_newBlockFilter' }),
          r = await e.request({ method: 'eth_newBlockFilter' });
        return { id: r, request: t(r), type: 'block' };
      }
      var A = r(6153),
        E = r(77854);
      class T extends E.G {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, { name: 'FilterTypeNotSupportedError' });
        }
      }
      var k = r(13990),
        x = r(60977),
        P = r(84303),
        B = r(26836),
        D = r(78978),
        I = r(89042);
      let R = '/docs/contract/encodeEventTopics';
      function F(e) {
        let { abi: t, eventName: r, args: n } = e,
          a = t[0];
        if (r) {
          let e = (0, I.mE)({ abi: t, name: r });
          if (!e) throw new A.mv(r, { docsPath: R });
          a = e;
        }
        if ('event' !== a.type) throw new A.mv(void 0, { docsPath: R });
        let i = (0, D.t)(a),
          o = (0, P.n)(i),
          s = [];
        if (n && 'inputs' in a) {
          let e = a.inputs?.filter((e) => 'indexed' in e && e.indexed),
            t = Array.isArray(n)
              ? n
              : Object.values(n).length > 0
                ? (e?.map((e) => n[e.name]) ?? [])
                : [];
          t.length > 0 &&
            (s =
              e?.map((e, r) =>
                Array.isArray(t[r])
                  ? t[r].map((n, a) => N({ param: e, value: t[r][a] }))
                  : void 0 !== t[r] && null !== t[r]
                    ? N({ param: e, value: t[r] })
                    : null
              ) ?? []);
        }
        return [o, ...s];
      }
      function N({ param: e, value: t }) {
        if ('string' === e.type || 'bytes' === e.type) return (0, x.w)((0, k.O0)(t));
        if ('tuple' === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new T(e.type);
        return (0, B.E)([e], [t]);
      }
      async function M(e, t) {
        let { address: r, abi: n, args: a, eventName: i, fromBlock: o, strict: s, toBlock: c } = t,
          u = C(e, { method: 'eth_newFilter' }),
          d = i ? F({ abi: n, args: a, eventName: i }) : void 0,
          f = await e.request({
            method: 'eth_newFilter',
            params: [
              {
                address: r,
                fromBlock: 'bigint' == typeof o ? (0, l.eC)(o) : o,
                toBlock: 'bigint' == typeof c ? (0, l.eC)(c) : c,
                topics: d,
              },
            ],
          });
        return { abi: n, args: a, eventName: i, id: f, request: u(f), strict: !!s, type: 'event' };
      }
      async function _(
        e,
        { address: t, args: r, event: n, events: a, fromBlock: i, strict: o, toBlock: s } = {}
      ) {
        let c = a ?? (n ? [n] : void 0),
          u = C(e, { method: 'eth_newFilter' }),
          d = [];
        c &&
          ((d = [c.flatMap((e) => F({ abi: [e], eventName: e.name, args: r }))]), n && (d = d[0]));
        let f = await e.request({
          method: 'eth_newFilter',
          params: [
            {
              address: t,
              fromBlock: 'bigint' == typeof i ? (0, l.eC)(i) : i,
              toBlock: 'bigint' == typeof s ? (0, l.eC)(s) : s,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: c,
          args: r,
          eventName: n ? n.name : void 0,
          fromBlock: i,
          id: f,
          request: u(f),
          strict: !!o,
          toBlock: s,
          type: 'event',
        };
      }
      async function z(e) {
        let t = C(e, { method: 'eth_newPendingTransactionFilter' }),
          r = await e.request({ method: 'eth_newPendingTransactionFilter' });
        return { id: r, request: t(r), type: 'transaction' };
      }
      var O = r(48666),
        G = r(45123),
        L = r(65870);
      async function $(e, t) {
        let { abi: r, address: n, args: a, functionName: i, dataSuffix: o, ...s } = t,
          l = (0, O.R)({ abi: r, args: a, functionName: i });
        try {
          return await (0, u.s)(
            e,
            L.Q,
            'estimateGas'
          )({ data: `${l}${o ? o.replace('0x', '') : ''}`, to: n, ...s });
        } catch (t) {
          let e = s.account ? (0, y.T)(s.account) : void 0;
          throw (0, G.S)(t, {
            abi: r,
            address: n,
            args: a,
            docsPath: '/docs/contract/estimateContractGas',
            functionName: i,
            sender: e?.address,
          });
        }
      }
      var K = r(22870),
        U = r(93153),
        H = r(76827);
      async function W(e) {
        return BigInt(await e.request({ method: 'eth_blobBaseFee' }));
      }
      var V = r(97046),
        j = r(22402),
        q = r(37968);
      async function J(e, { blockHash: t, blockNumber: r, blockTag: n = 'latest' } = {}) {
        let a;
        let i = void 0 !== r ? (0, l.eC)(r) : void 0;
        return (
          (a = t
            ? await e.request(
                { method: 'eth_getBlockTransactionCountByHash', params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                { method: 'eth_getBlockTransactionCountByNumber', params: [i || n] },
                { dedupe: !!i }
              )),
          (0, q.ly)(a)
        );
      }
      var Y = r(59383),
        Q = r(57480),
        Z = r(32569),
        X = r(99543),
        ee = r(20366),
        et = r(5718);
      let er = '/docs/contract/decodeEventLog';
      function en(e) {
        let { abi: t, data: r, strict: n, topics: a } = e,
          i = n ?? !0,
          [o, ...s] = a;
        if (!o) throw new A.FM({ docsPath: er });
        let l =
          1 === t.length ? t[0] : t.find((e) => 'event' === e.type && o === (0, P.n)((0, D.t)(e)));
        if (!(l && 'name' in l) || 'event' !== l.type) throw new A.lC(o, { docsPath: er });
        let { name: c, inputs: u } = l,
          d = u?.some((e) => !('name' in e && e.name)),
          f = d ? [] : {},
          p = u.filter((e) => 'indexed' in e && e.indexed);
        for (let e = 0; e < p.length; e++) {
          let t = p[e],
            r = s[e];
          if (!r) throw new A.Gy({ abiItem: l, param: t });
          f[d ? e : t.name || e] = (function ({ param: e, value: t }) {
            return 'string' === e.type ||
              'bytes' === e.type ||
              'tuple' === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, et.r)([e], t) || [])[0];
          })({ param: t, value: r });
        }
        let h = u.filter((e) => !('indexed' in e && e.indexed));
        if (h.length > 0) {
          if (r && '0x' !== r)
            try {
              let e = (0, et.r)(h, r);
              if (e) {
                if (d) f = [...f, ...e];
                else for (let t = 0; t < h.length; t++) f[h[t].name] = e[t];
              }
            } catch (e) {
              if (i) {
                if (e instanceof A.xB || e instanceof ee.lQ)
                  throw new A.SM({ abiItem: l, data: r, params: h, size: (0, X.d)(r) });
                throw e;
              }
            }
          else if (i) throw new A.SM({ abiItem: l, data: '0x', params: h, size: 0 });
        }
        return { eventName: c, args: Object.values(f).length > 0 ? f : void 0 };
      }
      function ea(e) {
        let { abi: t, args: r, logs: n, strict: a = !0 } = e,
          i = (() => {
            if (e.eventName) return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return n
          .map((e) => {
            try {
              let n = t.find((t) => 'event' === t.type && e.topics[0] === (0, P.n)(t));
              if (!n) return null;
              let o = en({ ...e, abi: [n], strict: a });
              if (
                (i && !i.includes(o.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: r, matchArgs: n } = e;
                  if (!n) return !0;
                  if (!t) return !1;
                  function a(e, t, r) {
                    try {
                      if ('address' === e.type) return (0, Z.E)(t, r);
                      if ('string' === e.type || 'bytes' === e.type)
                        return (0, x.w)((0, k.O0)(t)) === r;
                      return t === r;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(n)
                    ? n.every((e, n) => {
                        if (null == e) return !0;
                        let i = r[n];
                        return !!i && (Array.isArray(e) ? e : [e]).some((e) => a(i, e, t[n]));
                      })
                    : !(
                        'object' != typeof t ||
                        Array.isArray(t) ||
                        'object' != typeof n ||
                        Array.isArray(n)
                      ) &&
                        Object.entries(n).every(([e, n]) => {
                          if (null == n) return !0;
                          let i = r.find((t) => t.name === e);
                          return !!i && (Array.isArray(n) ? n : [n]).some((r) => a(i, r, t[e]));
                        });
                })({ args: o.args, inputs: n.inputs, matchArgs: r })
              )
                return null;
              return { ...o, ...e };
            } catch (n) {
              let t, r;
              if (n instanceof A.lC) return null;
              if (n instanceof A.SM || n instanceof A.Gy) {
                if (a) return null;
                (t = n.abiItem.name), (r = n.abiItem.inputs?.some((e) => !('name' in e && e.name)));
              }
              return { ...e, args: r ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
      var ei = r(86324);
      async function eo(
        e,
        {
          address: t,
          blockHash: r,
          fromBlock: n,
          toBlock: a,
          event: i,
          events: o,
          args: s,
          strict: c,
        } = {}
      ) {
        let u = o ?? (i ? [i] : void 0),
          d = [];
        u &&
          ((d = [u.flatMap((e) => F({ abi: [e], eventName: e.name, args: o ? void 0 : s }))]),
          i && (d = d[0]));
        let f = (
          r
            ? await e.request({
                method: 'eth_getLogs',
                params: [{ address: t, topics: d, blockHash: r }],
              })
            : await e.request({
                method: 'eth_getLogs',
                params: [
                  {
                    address: t,
                    topics: d,
                    fromBlock: 'bigint' == typeof n ? (0, l.eC)(n) : n,
                    toBlock: 'bigint' == typeof a ? (0, l.eC)(a) : a,
                  },
                ],
              })
        ).map((e) => (0, ei.U)(e));
        return u ? ea({ abi: u, args: s, logs: f, strict: c ?? !1 }) : f;
      }
      async function es(e, t) {
        let {
            abi: r,
            address: n,
            args: a,
            blockHash: i,
            eventName: o,
            fromBlock: s,
            toBlock: l,
            strict: c,
          } = t,
          d = o ? (0, I.mE)({ abi: r, name: o }) : void 0,
          f = d ? void 0 : r.filter((e) => 'event' === e.type);
        return (0, u.s)(
          e,
          eo,
          'getLogs'
        )({
          address: n,
          args: a,
          blockHash: i,
          event: d,
          events: f,
          fromBlock: s,
          toBlock: l,
          strict: c,
        });
      }
      class el extends E.G {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              'Ensure that:',
              `- The contract is deployed at the address "${e}".`,
              '- `eip712Domain()` function exists on the contract.',
              '- `eip712Domain()` function matches signature to ERC-5267 specification.',
            ],
            name: 'Eip712DomainNotFoundError',
          });
        }
      }
      async function ec(e, t) {
        let { address: r, factory: n, factoryData: a } = t;
        try {
          let [t, i, o, s, l, c, f] = await (0, u.s)(
            e,
            d.L,
            'readContract'
          )({ abi: eu, address: r, functionName: 'eip712Domain', factory: n, factoryData: a });
          return {
            domain: { name: i, version: o, chainId: Number(s), verifyingContract: l, salt: c },
            extensions: f,
            fields: t,
          };
        } catch (e) {
          if (
            'ContractFunctionExecutionError' === e.name &&
            'ContractFunctionZeroDataError' === e.cause.name
          )
            throw new el({ address: r });
          throw e;
        }
      }
      let eu = [
        {
          inputs: [],
          name: 'eip712Domain',
          outputs: [
            { name: 'fields', type: 'bytes1' },
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
            { name: 'salt', type: 'bytes32' },
            { name: 'extensions', type: 'uint256[]' },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ];
      async function ed(
        e,
        { blockCount: t, blockNumber: r, blockTag: n = 'latest', rewardPercentiles: a }
      ) {
        var i;
        let o = r ? (0, l.eC)(r) : void 0;
        return {
          baseFeePerGas: (i = await e.request(
            { method: 'eth_feeHistory', params: [(0, l.eC)(t), o || n, a] },
            { dedupe: !!o }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function ef(e, { filter: t }) {
        let r = 'strict' in t && t.strict,
          n = await t.request({ method: 'eth_getFilterChanges', params: [t.id] });
        if ('string' == typeof n[0]) return n;
        let a = n.map((e) => (0, ei.U)(e));
        return 'abi' in t && t.abi ? ea({ abi: t.abi, logs: a, strict: r }) : a;
      }
      async function ep(e, { filter: t }) {
        let r = t.strict ?? !1,
          n = (await t.request({ method: 'eth_getFilterLogs', params: [t.id] })).map((e) =>
            (0, ei.U)(e)
          );
        return t.abi ? ea({ abi: t.abi, logs: n, strict: r }) : n;
      }
      var eh = r(57843);
      async function ey(e, { address: t, blockNumber: r, blockTag: n, storageKeys: a }) {
        var i;
        let o = void 0 !== r ? (0, l.eC)(r) : void 0;
        return {
          ...(i = await e.request({
            method: 'eth_getProof',
            params: [t, a, o || (n ?? 'latest')],
          })),
          balance: i.balance ? BigInt(i.balance) : void 0,
          nonce: i.nonce ? (0, q.ly)(i.nonce) : void 0,
          storageProof: i.storageProof
            ? i.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function em(e, { address: t, blockNumber: r, blockTag: n = 'latest', slot: a }) {
        let i = void 0 !== r ? (0, l.eC)(r) : void 0;
        return await e.request({ method: 'eth_getStorageAt', params: [t, a, i || n] });
      }
      var eg = r(67328);
      async function eb(e, { hash: t, transactionReceipt: r }) {
        let [n, a] = await Promise.all([
            (0, u.s)(e, j.z, 'getBlockNumber')({}),
            t ? (0, u.s)(e, eg.f, 'getTransaction')({ hash: t }) : void 0,
          ]),
          i = r?.blockNumber || a?.blockNumber;
        return i ? n - i + 1n : 0n;
      }
      var ew = r(85322),
        ev = r(96544),
        eC = r(8055);
      class eS extends Error {
        constructor(e, t = {}) {
          let r = (() => {
              if (t.cause instanceof eS) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            n = (t.cause instanceof eS && t.cause.docsPath) || t.docsPath,
            a = `https://oxlib.sh${n ?? ''}`;
          super(
            [
              e || 'An error occurred.',
              ...(t.metaMessages ? ['', ...t.metaMessages] : []),
              ...(r || n ? ['', r ? `Details: ${r}` : void 0, n ? `See: ${a}` : void 0] : []),
            ]
              .filter((e) => 'string' == typeof e)
              .join('\n'),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, 'details', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'docs', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'docsPath', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'shortMessage', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'cause', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'BaseError',
            }),
            Object.defineProperty(this, 'version', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ox@0.1.1',
            }),
            (this.cause = t.cause),
            (this.details = r),
            (this.docs = a),
            (this.docsPath = n),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && 'object' == typeof t && 'cause' in t && t.cause
                ? e(t.cause, r)
                : r
                  ? null
                  : t;
          })(this, e);
        }
      }
      function eA(e, t) {
        if (eM(e) > t) throw new eG({ givenSize: eM(e), maxSize: t });
      }
      function eE(e, t = {}) {
        let { dir: r, size: n = 32 } = t;
        if (0 === n) return e;
        let a = e.replace('0x', '');
        if (a.length > 2 * n)
          throw new e$({ size: Math.ceil(a.length / 2), targetSize: n, type: 'Hex' });
        return `0x${a['right' === r ? 'padEnd' : 'padStart'](2 * n, '0')}`;
      }
      let eT = new TextEncoder(),
        ek = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function ex(...e) {
        return `0x${e.reduce((e, t) => e + t.replace('0x', ''), '')}`;
      }
      function eP(e, t = {}) {
        let r = `0x${Number(e)}`;
        return 'number' == typeof t.size ? (eA(r, t.size), eR(r, t.size)) : r;
      }
      function eB(e, t = {}) {
        let r = '';
        for (let t = 0; t < e.length; t++) r += ek[e[t]];
        let n = `0x${r}`;
        return 'number' == typeof t.size ? (eA(n, t.size), eF(n, t.size)) : n;
      }
      function eD(e, t = {}) {
        let r;
        let { signed: n, size: a } = t,
          i = BigInt(e);
        a
          ? (r = n ? (1n << (8n * BigInt(a) - 1n)) - 1n : 2n ** (8n * BigInt(a)) - 1n)
          : 'number' == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let o = 'bigint' == typeof r && n ? -r - 1n : 0;
        if ((r && i > r) || i < o) {
          let t = 'bigint' == typeof e ? 'n' : '';
          throw new e_({
            max: r ? `${r}${t}` : void 0,
            min: `${o}${t}`,
            signed: n,
            size: a,
            value: `${e}${t}`,
          });
        }
        let s = (n && i < 0 ? (1n << BigInt(8 * a)) + BigInt(i) : i).toString(16),
          l = `0x${s}`;
        return a ? eR(l, a) : l;
      }
      function eI(e, t = {}) {
        return eB(eT.encode(e), t);
      }
      function eR(e, t) {
        return eE(e, { dir: 'left', size: t });
      }
      function eF(e, t) {
        return eE(e, { dir: 'right', size: t });
      }
      function eN(e, t, r, n = {}) {
        let { strict: a } = n;
        !(function (e, t) {
          if ('number' == typeof t && t > 0 && t > eM(e) - 1)
            throw new eL({ offset: t, position: 'start', size: eM(e) });
        })(e, t);
        let i = `0x${e.replace('0x', '').slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return (
          a &&
            (function (e, t, r) {
              if ('number' == typeof t && 'number' == typeof r && eM(e) !== r - t)
                throw new eL({ offset: r, position: 'end', size: eM(e) });
            })(i, t, r),
          i
        );
      }
      function eM(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      class e_ extends eS {
        constructor({ max: e, min: t, signed: r, size: n, value: a }) {
          super(
            `Number \`${a}\` is not in safe${n ? ` ${8 * n}-bit` : ''}${r ? ' signed' : ' unsigned'} integer range ${e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`}`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.IntegerOutOfRangeError',
            });
        }
      }
      class ez extends eS {
        constructor(e) {
          var t;
          super(
            `Value \`${'object' == typeof e ? JSON.stringify(e, (e, r) => ('function' == typeof t ? t(e, r) : 'bigint' == typeof r ? r.toString() + '#__bigint' : r), void 0) : e}\` of type \`${typeof e}\` is an invalid hex type.`,
            { metaMessages: ['Hex types must be represented as `"0x${string}"`.'] }
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.InvalidHexTypeError',
            });
        }
      }
      class eO extends eS {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.InvalidHexValueError',
            });
        }
      }
      class eG extends eS {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.SizeOverflowError',
            });
        }
      }
      class eL extends eS {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${'start' === t ? 'starting' : 'ending'} at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.SliceOffsetOutOfBoundsError',
            });
        }
      }
      class e$ extends eS {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.SizeExceedsPaddingSizeError',
            });
        }
      }
      function eK(e) {
        return {
          address: e.address,
          amount: eD(e.amount),
          index: eD(e.index),
          validatorIndex: eD(e.validatorIndex),
        };
      }
      var eU = r(22262),
        eH = r(42850),
        eW = r(31359),
        eV = r(18626),
        ej = r(26573),
        eq = r(64924);
      async function eJ(e, t) {
        let {
          blockNumber: r,
          blockTag: n = 'latest',
          blocks: a,
          returnFullTransactions: i,
          traceTransfers: o,
          validation: s,
        } = t;
        try {
          let t = [];
          for (let e of a) {
            var c;
            let r = e.blockOverrides
                ? ((c = e.blockOverrides),
                  {
                    ...('bigint' == typeof c.baseFeePerGas && {
                      baseFeePerGas: eD(c.baseFeePerGas),
                    }),
                    ...('bigint' == typeof c.blobBaseFee && { blobBaseFee: eD(c.blobBaseFee) }),
                    ...('string' == typeof c.feeRecipient && { feeRecipient: c.feeRecipient }),
                    ...('bigint' == typeof c.gasLimit && { gasLimit: eD(c.gasLimit) }),
                    ...('bigint' == typeof c.number && { number: eD(c.number) }),
                    ...('bigint' == typeof c.prevRandao && { prevRandao: eD(c.prevRandao) }),
                    ...('bigint' == typeof c.time && { time: eD(c.time) }),
                    ...(c.withdrawals && { withdrawals: c.withdrawals.map(eK) }),
                  })
                : void 0,
              n = e.calls.map((e) => {
                let t = e.account ? (0, y.T)(e.account) : void 0,
                  r = { ...e, data: e.abi ? (0, O.R)(e) : e.data, from: e.from ?? t?.address };
                return (0, w.F)(r), (0, b.tG)(r);
              }),
              a = e.stateOverrides ? (0, eq.mF)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: r, calls: n, stateOverrides: a });
          }
          let u = r ? (0, l.eC)(r) : void 0;
          return (
            await e.request({
              method: 'eth_simulateV1',
              params: [
                { blockStateCalls: t, returnFullTransactions: i, traceTransfers: o, validation: s },
                u || n,
              ],
            })
          ).map((e, t) => ({
            ...(0, ej.Z)(e),
            calls: e.calls.map((e, r) => {
              let { abi: n, args: i, functionName: o, to: s } = a[t].calls[r],
                l = e.error?.data ?? e.returnData,
                c = BigInt(e.gasUsed),
                u = e.logs?.map((e) => ei.U(e)),
                d = '0x1' === e.status ? 'success' : 'failure',
                f = n && 'success' === d ? (0, eW.k)({ abi: n, data: l, functionName: o }) : null,
                p = (() => {
                  let t;
                  if (
                    'success' !== d &&
                    (e.error?.data === '0x'
                      ? (t = new A.wb())
                      : e.error && (t = new eU.VQ(e.error)),
                    t)
                  )
                    return (0, G.S)(t, {
                      abi: n ?? [],
                      address: s,
                      args: i,
                      functionName: o ?? '<unknown>',
                    });
                })();
              return {
                data: l,
                gasUsed: c,
                logs: u,
                status: d,
                ...('success' === d ? { result: f } : { error: p }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, eV.k)(t, {});
          if (e instanceof eH.cj) throw t;
          throw e;
        }
      }
      var eY = r(30504),
        eQ = r(9923),
        eZ = r(46927),
        eX = r(37074),
        e1 = r(32623),
        e0 = r(52378);
      let e2 = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function e3(e) {
        return e >= e2.zero && e <= e2.nine
          ? e - e2.zero
          : e >= e2.A && e <= e2.F
            ? e - (e2.A - 10)
            : e >= e2.a && e <= e2.f
              ? e - (e2.a - 10)
              : void 0;
      }
      let e4 = new TextEncoder();
      class e5 extends eS {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Bytes.SizeOverflowError',
            });
        }
      }
      class e6 extends eS {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Bytes.SizeExceedsPaddingSizeError',
            });
        }
      }
      function e7(e, t = {}) {
        let { as: r = 'string' == typeof e ? 'Hex' : 'Bytes' } = t,
          n = (0, e0.fr)(
            e instanceof Uint8Array
              ? e
              : 'string' == typeof e
                ? (function (e, t = {}) {
                    let { size: r } = t,
                      n = e;
                    r && (eA(e, r), (n = eF(e, r)));
                    let a = n.slice(2);
                    a.length % 2 && (a = `0${a}`);
                    let i = a.length / 2,
                      o = new Uint8Array(i);
                    for (let e = 0, t = 0; e < i; e++) {
                      let r = e3(a.charCodeAt(t++)),
                        n = e3(a.charCodeAt(t++));
                      if (void 0 === r || void 0 === n)
                        throw new eS(`Invalid byte sequence ("${a[t - 2]}${a[t - 1]}" in "${a}").`);
                      o[e] = 16 * r + n;
                    }
                    return o;
                  })(e)
                : e instanceof Uint8Array
                  ? e
                  : new Uint8Array(e)
          );
        return 'Bytes' === r ? n : eB(n);
      }
      class e8 extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, 'maxSize', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let e9 = { checksum: new e8(8192) }.checksum,
        te = /^0x[a-fA-F0-9]{40}$/;
      function tt(e, t = {}) {
        let { strict: r = !0 } = t;
        if (!te.test(e)) throw new tn({ address: e, cause: new ta() });
        if (r) {
          if (e.toLowerCase() === e) return;
          if (
            (function (e) {
              if (e9.has(e)) return e9.get(e);
              tt(e, { strict: !1 });
              let t = e.substring(2).toLowerCase(),
                r = e7(
                  (function (e, t = {}) {
                    let { size: r } = t,
                      n = e4.encode(e);
                    return 'number' == typeof r
                      ? (!(function (e, t) {
                          if (e.length > t) throw new e5({ givenSize: e.length, maxSize: t });
                        })(n, r),
                        (function (e, t = {}) {
                          let { dir: r, size: n = 32 } = t;
                          if (0 === n) return e;
                          if (e.length > n)
                            throw new e6({ size: e.length, targetSize: n, type: 'Bytes' });
                          let a = new Uint8Array(n);
                          for (let t = 0; t < n; t++) {
                            let i = 'right' === r;
                            a[i ? t : n - t - 1] = e[i ? t : e.length - t - 1];
                          }
                          return a;
                        })(n, { dir: 'right', size: r }))
                      : n;
                  })(t),
                  { as: 'Bytes' }
                ),
                n = t.split('');
              for (let e = 0; e < 40; e += 2)
                r[e >> 1] >> 4 >= 8 && n[e] && (n[e] = n[e].toUpperCase()),
                  (15 & r[e >> 1]) >= 8 && n[e + 1] && (n[e + 1] = n[e + 1].toUpperCase());
              let a = `0x${n.join('')}`;
              return e9.set(e, a), a;
            })(e) !== e
          )
            throw new tn({ address: e, cause: new ti() });
        }
      }
      function tr(e, t = {}) {
        let { strict: r = !0 } = t ?? {};
        try {
          return tt(e, { strict: r }), !0;
        } catch {
          return !1;
        }
      }
      class tn extends eS {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Address.InvalidAddressError',
            });
        }
      }
      class ta extends eS {
        constructor() {
          super('Address is not a 20 byte (40 hexadecimal character) value.'),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Address.InvalidInputError',
            });
        }
      }
      class ti extends eS {
        constructor() {
          super('Address does not match its checksum counterpart.'),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Address.InvalidChecksumError',
            });
        }
      }
      function to(e) {
        let t = !0,
          r = '',
          n = 0,
          a = '',
          i = !1;
        for (let o = 0; o < e.length; o++) {
          let s = e[o];
          if ((['(', ')', ','].includes(s) && (t = !0), '(' === s && n++, ')' === s && n--, t)) {
            if (0 === n) {
              if (' ' === s && ['event', 'function', 'error', ''].includes(a)) a = '';
              else if (((a += s), ')' === s)) {
                i = !0;
                break;
              }
              continue;
            }
            if (' ' === s) {
              ',' !== e[o - 1] && ',' !== r && ',(' !== r && ((r = ''), (t = !1));
              continue;
            }
            (a += s), (r += s);
          }
        }
        if (!i) throw new eS('Unable to normalize signature.');
        return a;
      }
      function ts(e, t = {}) {
        let { prepare: r = !0 } = t,
          n =
            Array.isArray(e) || 'string' == typeof e
              ? (function (e) {
                  let t;
                  if ('string' == typeof e) t = (0, eX.cK)(e);
                  else {
                    let r = (0, eZ.D)(e),
                      n = e.length;
                    for (let a = 0; a < n; a++) {
                      let n = e[a];
                      if (!(0, eQ.N0)(n)) {
                        t = (0, eX.cK)(n, r);
                        break;
                      }
                    }
                  }
                  if (!t) throw new eY.a_({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...n, ...(r ? { hash: tc(n) } : {}) };
      }
      function tl(e) {
        return eN(tc(e), 0, 4);
      }
      function tc(e) {
        return 'string' != typeof e && 'hash' in e && e.hash
          ? e.hash
          : e7(eI(to('string' == typeof e ? e : e1.t(e))));
      }
      class tu extends eS {
        constructor(e, t) {
          super('Found ambiguous types in overloaded ABI Items.', {
            metaMessages: [
              `\`${e.type}\` in \`${to(e1.t(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${to(e1.t(t.abiItem))}\``,
              '',
              'These types encode differently and cannot be distinguished at runtime.',
              'Remove one of the ambiguous items in the ABI.',
            ],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiItem.AmbiguityError',
            });
        }
      }
      class td extends eS {
        constructor({ name: e, data: t, type: r = 'item' }) {
          super(`ABI ${r}${e ? ` with name "${e}"` : t ? ` with data "${t}"` : ''} not found.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiItem.NotFoundError',
            });
        }
      }
      r(99093);
      let tf = /^(.*)\[([0-9]*)\]$/,
        tp = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        th =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function ty(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: n, encoded: a } = e[r];
          n ? (t += 32) : (t += eM(a));
        }
        let r = [],
          n = [],
          a = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: o, encoded: s } = e[i];
          o ? (r.push(eD(t + a, { size: 32 })), n.push(s), (a += eM(s))) : r.push(s);
        }
        return ex(...r, ...n);
      }
      function tm(e, t, r) {
        let { checksumAddress: n = !1 } = r ?? {};
        if (e.length !== t.length)
          throw new tv({ expectedLength: e.length, givenLength: t.length });
        let a = ty(
          (function ({ checksumAddress: e, parameters: t, values: r }) {
            let n = [];
            for (let a = 0; a < t.length; a++)
              n.push(
                (function e({ checksumAddress: t = !1, parameter: r, value: n }) {
                  let a = (function (e) {
                    let t = e.match(/^(.*)\[(\d+)?\]$/);
                    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
                  })(r.type);
                  if (a) {
                    let [i, o] = a;
                    return (function (t, r) {
                      let { checksumAddress: n, length: a, parameter: i } = r,
                        o = null === a;
                      if (!Array.isArray(t)) throw new tC(t);
                      if (!o && t.length !== a)
                        throw new tb({
                          expectedLength: a,
                          givenLength: t.length,
                          type: `${i.type}[${a}]`,
                        });
                      let s = !1,
                        l = [];
                      for (let r = 0; r < t.length; r++) {
                        let a = e({ checksumAddress: n, parameter: i, value: t[r] });
                        a.dynamic && (s = !0), l.push(a);
                      }
                      if (o || s) {
                        let e = ty(l);
                        if (o) {
                          let t = eD(l.length, { size: 32 });
                          return { dynamic: !0, encoded: l.length > 0 ? ex(t, e) : t };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return { dynamic: !1, encoded: ex(...l.map(({ encoded: e }) => e)) };
                    })(n, { checksumAddress: t, length: i, parameter: { ...r, type: o } });
                  }
                  if ('tuple' === r.type)
                    return (function (t, r) {
                      let { checksumAddress: n, parameter: a } = r,
                        i = !1,
                        o = [];
                      for (let r = 0; r < a.components.length; r++) {
                        let s = a.components[r],
                          l = Array.isArray(t) ? r : s.name,
                          c = e({ checksumAddress: n, parameter: s, value: t[l] });
                        o.push(c), c.dynamic && (i = !0);
                      }
                      return {
                        dynamic: i,
                        encoded: i ? ty(o) : ex(...o.map(({ encoded: e }) => e)),
                      };
                    })(n, { checksumAddress: t, parameter: r });
                  if ('address' === r.type)
                    return (function (e, t) {
                      let { checksum: r = !1 } = t;
                      return tt(e, { strict: r }), { dynamic: !1, encoded: eR(e.toLowerCase()) };
                    })(n, { checksum: t });
                  if ('bool' === r.type)
                    return (function (e) {
                      if ('boolean' != typeof e)
                        throw new eS(
                          `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: eR(eP(e)) };
                    })(n);
                  if (r.type.startsWith('uint') || r.type.startsWith('int')) {
                    let e = r.type.startsWith('int'),
                      [, , t = '256'] = th.exec(r.type) ?? [];
                    return (function (e, { signed: t, size: r }) {
                      if ('number' == typeof r) {
                        let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                          a = t ? -n - 1n : 0n;
                        if (e > n || e < a)
                          throw new e_({
                            max: n.toString(),
                            min: a.toString(),
                            signed: t,
                            size: r / 8,
                            value: e.toString(),
                          });
                      }
                      return { dynamic: !1, encoded: eD(e, { size: 32, signed: t }) };
                    })(n, { signed: e, size: Number(t) });
                  }
                  if (r.type.startsWith('bytes'))
                    return (function (e, { type: t }) {
                      let [, r] = t.split('bytes'),
                        n = eM(e);
                      if (!r) {
                        let t = e;
                        return (
                          n % 32 != 0 && (t = eF(t, 32 * Math.ceil((e.length - 2) / 2 / 32))),
                          { dynamic: !0, encoded: ex(eR(eD(n, { size: 32 })), t) }
                        );
                      }
                      if (n !== Number.parseInt(r))
                        throw new tw({ expectedSize: Number.parseInt(r), value: e });
                      return { dynamic: !1, encoded: eF(e) };
                    })(n, { type: r.type });
                  if ('string' === r.type)
                    return (function (e) {
                      let t = eI(e),
                        r = Math.ceil(eM(t) / 32),
                        n = [];
                      for (let e = 0; e < r; e++) n.push(eF(eN(t, 32 * e, (e + 1) * 32)));
                      return { dynamic: !0, encoded: ex(eF(eD(eM(t), { size: 32 })), ...n) };
                    })(n);
                  throw new tS(r.type);
                })({ checksumAddress: e, parameter: t[a], value: r[a] })
              );
            return n;
          })({ checksumAddress: n, parameters: e, values: t })
        );
        return 0 === a.length ? '0x' : a;
      }
      function tg(e, t) {
        if (e.length !== t.length)
          throw new tv({ expectedLength: e.length, givenLength: t.length });
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let a = e[n],
            i = t[n];
          r.push(tg.encode(a, i));
        }
        return ex(...r);
      }
      (tg || (tg = {})).encode = function e(t, r, n = !1) {
        if ('address' === t) return tt(r), eR(r.toLowerCase(), n ? 32 : 0);
        if ('string' === t) return eI(r);
        if ('bytes' === t) return r;
        if ('bool' === t) return eR(eP(r), n ? 32 : 1);
        let a = t.match(th);
        if (a) {
          let [e, t, i = '256'] = a,
            o = Number.parseInt(i) / 8;
          return eD(r, { size: n ? 32 : o, signed: 'int' === t });
        }
        let i = t.match(tp);
        if (i) {
          let [e, t] = i;
          if (Number.parseInt(t) !== (r.length - 2) / 2)
            throw new tw({ expectedSize: Number.parseInt(t), value: r });
          return eF(r, n ? 32 : 0);
        }
        let o = t.match(tf);
        if (o && Array.isArray(r)) {
          let [t, n] = o,
            a = [];
          for (let t = 0; t < r.length; t++) a.push(e(n, r[t], !0));
          return 0 === a.length ? '0x' : ex(...a);
        }
        throw new tS(t);
      };
      class tb extends eS {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(`Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.ArrayLengthMismatchError',
            });
        }
      }
      class tw extends eS {
        constructor({ expectedSize: e, value: t }) {
          super(`Size of bytes "${t}" (bytes${eM(t)}) does not match expected size (bytes${e}).`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.BytesSizeMismatchError',
            });
        }
      }
      class tv extends eS {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.LengthMismatchError',
            });
        }
      }
      class tC extends eS {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.InvalidArrayError',
            });
        }
      }
      class tS extends eS {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.InvalidTypeError',
            });
        }
      }
      function tA(e, t = {}) {
        return ts(e, t);
      }
      let tE = '0x0000000000000000000000000000000000000000';
      var tT = r(9915);
      async function tk(e, t) {
        let {
            blockNumber: r,
            blockTag: n,
            calls: a,
            stateOverrides: i,
            traceAssetChanges: o,
            traceTransfers: s,
            validation: l,
          } = t,
          c = t.account ? (0, y.T)(t.account) : void 0;
        if (o && !c) throw new E.G('`account` is required when `traceAssetChanges` is true');
        let u = c
            ? (function (e, t) {
                let { bytecode: r, args: n } = t;
                return ex(r, e.inputs?.length && n?.length ? tm(e.inputs, n) : '0x');
              })(ts('constructor(bytes, bytes)'), {
                bytecode: tT.NO,
                args: [
                  '0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033',
                  (function (e, ...t) {
                    let { overloads: r } = e,
                      n = r
                        ? (function (e, t, r) {
                            let n = (function (e, t, r) {
                              let n;
                              let { args: a = [], prepare: i = !0 } = r ?? {},
                                o = (function (e, t = {}) {
                                  let { strict: r = !1 } = t;
                                  try {
                                    return (
                                      !(function (e, t = {}) {
                                        let { strict: r = !1 } = t;
                                        if (!e || 'string' != typeof e) throw new ez(e);
                                        if (
                                          (r && !/^0x[0-9a-fA-F]*$/.test(e)) ||
                                          !e.startsWith('0x')
                                        )
                                          throw new eO(e);
                                      })(e, { strict: r }),
                                      !0
                                    );
                                  } catch {
                                    return !1;
                                  }
                                })(t, { strict: !1 }),
                                s = e.filter((e) =>
                                  o
                                    ? 'function' === e.type || 'error' === e.type
                                      ? tl(e) === eN(t, 0, 4)
                                      : 'event' === e.type && tc(e) === t
                                    : 'name' in e && e.name === t
                                );
                              if (0 === s.length) throw new td({ name: t });
                              if (1 === s.length)
                                return { ...s[0], ...(i ? { hash: tc(s[0]) } : {}) };
                              for (let e of s)
                                if ('inputs' in e) {
                                  if (!a || 0 === a.length) {
                                    if (!e.inputs || 0 === e.inputs.length)
                                      return { ...e, ...(i ? { hash: tc(e) } : {}) };
                                    continue;
                                  }
                                  if (
                                    e.inputs &&
                                    0 !== e.inputs.length &&
                                    e.inputs.length === a.length &&
                                    a.every((t, r) => {
                                      let n = 'inputs' in e && e.inputs[r];
                                      return (
                                        !!n &&
                                        (function e(t, r) {
                                          let n = typeof t,
                                            a = r.type;
                                          switch (a) {
                                            case 'address':
                                              return tr(t, { strict: !1 });
                                            case 'bool':
                                              return 'boolean' === n;
                                            case 'function':
                                            case 'string':
                                              return 'string' === n;
                                            default:
                                              if ('tuple' === a && 'components' in r)
                                                return Object.values(r.components).every((r, n) =>
                                                  e(Object.values(t)[n], r)
                                                );
                                              if (
                                                /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                                                  a
                                                )
                                              )
                                                return 'number' === n || 'bigint' === n;
                                              if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                                                return 'string' === n || t instanceof Uint8Array;
                                              if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                                                return (
                                                  Array.isArray(t) &&
                                                  t.every((t) =>
                                                    e(t, {
                                                      ...r,
                                                      type: a.replace(/(\[[0-9]{0,}\])$/, ''),
                                                    })
                                                  )
                                                );
                                              return !1;
                                          }
                                        })(t, n)
                                      );
                                    })
                                  ) {
                                    if (n && 'inputs' in n && n.inputs) {
                                      let t = (function e(t, r, n) {
                                        for (let a in t) {
                                          let i = t[a],
                                            o = r[a];
                                          if (
                                            'tuple' === i.type &&
                                            'tuple' === o.type &&
                                            'components' in i &&
                                            'components' in o
                                          )
                                            return e(i.components, o.components, n[a]);
                                          let s = [i.type, o.type];
                                          if (
                                            (s.includes('address') && s.includes('bytes20')) ||
                                            (((s.includes('address') && s.includes('string')) ||
                                              (s.includes('address') && s.includes('bytes'))) &&
                                              tr(n[a], { strict: !1 }))
                                          )
                                            return s;
                                        }
                                      })(e.inputs, n.inputs, a);
                                      if (t)
                                        throw new tu(
                                          { abiItem: e, type: t[0] },
                                          { abiItem: n, type: t[1] }
                                        );
                                    }
                                    n = e;
                                  }
                                }
                              let l = (() => {
                                if (n) return n;
                                let [e, ...t] = s;
                                return { ...e, overloads: t };
                              })();
                              if (!l) throw new td({ name: t });
                              return { ...l, ...(i ? { hash: tc(l) } : {}) };
                            })(e, t, r);
                            if ('function' !== n.type) throw new td({ name: t, type: 'function' });
                            return n;
                          })([e, ...r], e.name, { args: t[0] })
                        : e,
                      a = tl(n),
                      i = t.length > 0 ? tm(n.inputs, t[0]) : void 0;
                    return i ? ex(a, i) : a;
                  })(tA('function getBalance(address)'), [c.address]),
                ],
              })
            : void 0,
          d = o
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: r } = await v(e, {
                    account: c.address,
                    ...t,
                    data: t.abi ? (0, O.R)(t) : t.data,
                  });
                  return r.map(({ address: e, storageKeys: t }) => (t.length > 0 ? e : null));
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          f = i?.map((e) => (e.address === c?.address ? { ...e, nonce: 0 } : e)),
          p = await eJ(e, {
            blockNumber: r,
            blockTag: n,
            blocks: [
              ...(o
                ? [
                    { calls: [{ data: u }], stateOverrides: i },
                    {
                      calls: d.map((e, t) => ({
                        abi: [tA('function balanceOf(address) returns (uint256)')],
                        functionName: 'balanceOf',
                        args: [c.address],
                        to: e,
                        from: tE,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tE, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...a, {}].map((e, t) => ({ ...e, from: c?.address, nonce: t })),
                stateOverrides: f,
              },
              ...(o
                ? [
                    { calls: [{ data: u }] },
                    {
                      calls: d.map((e, t) => ({
                        abi: [tA('function balanceOf(address) returns (uint256)')],
                        functionName: 'balanceOf',
                        args: [c.address],
                        to: e,
                        from: tE,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tE, nonce: 0 }],
                    },
                    {
                      calls: d.map((e, t) => ({
                        to: e,
                        abi: [tA('function decimals() returns (uint256)')],
                        functionName: 'decimals',
                        from: tE,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tE, nonce: 0 }],
                    },
                    {
                      calls: d.map((e, t) => ({
                        to: e,
                        abi: [tA('function tokenURI(uint256) returns (string)')],
                        functionName: 'tokenURI',
                        args: [0n],
                        from: tE,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tE, nonce: 0 }],
                    },
                    {
                      calls: d.map((e, t) => ({
                        to: e,
                        abi: [tA('function symbol() returns (string)')],
                        functionName: 'symbol',
                        from: tE,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tE, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: s,
            validation: l,
          }),
          h = o ? p[2] : p[0],
          [m, g, , b, w, C, S, A] = o ? p : [],
          { calls: T, ...k } = h,
          x = T.slice(0, -1) ?? [],
          P = [...(m?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
            'success' === e.status ? (0, q.y_)(e.data) : null
          ),
          B = [...(b?.calls ?? []), ...(w?.calls ?? [])].map((e) =>
            'success' === e.status ? (0, q.y_)(e.data) : null
          ),
          D = (C?.calls ?? []).map((e) => ('success' === e.status ? e.result : null)),
          I = (A?.calls ?? []).map((e) => ('success' === e.status ? e.result : null)),
          R = (S?.calls ?? []).map((e) => ('success' === e.status ? e.result : null)),
          F = [];
        for (let [e, t] of B.entries()) {
          let r = P[e];
          if ('bigint' != typeof t || 'bigint' != typeof r) continue;
          let n = D[e - 1],
            a = I[e - 1],
            i = R[e - 1],
            o =
              0 === e
                ? {
                    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                    decimals: 18,
                    symbol: 'ETH',
                  }
                : {
                    address: d[e - 1],
                    decimals: i || n ? Number(n ?? 1) : void 0,
                    symbol: a ?? void 0,
                  };
          F.some((e) => e.token.address === o.address) ||
            F.push({ token: o, value: { pre: r, post: t, diff: t - r } });
        }
        return { assetChanges: F, block: k, results: x };
      }
      var tx = r(83753);
      async function tP(e, { filter: t }) {
        return t.request({ method: 'eth_uninstallFilter', params: [t.id] });
      }
      var tB = r(54886),
        tD = r(13317),
        tI = r(68853),
        tR = r(11238),
        tF = r(13393),
        tN = r(67329),
        tM = r(36571),
        t_ = r(27669),
        tz = r(1155),
        tO = r(88028);
      async function tG(e, t) {
        let {
            address: r,
            factory: n,
            factoryData: a,
            hash: i,
            signature: o,
            universalSignatureVerifierAddress: s = e.chain?.contracts?.universalSignatureVerifier
              ?.address,
            ...c
          } = t,
          d = (0, tF.v)(o)
            ? o
            : 'object' == typeof o && 'r' in o && 's' in o
              ? (0, tO.V)(o)
              : (0, l.ci)(o),
          f = await (async () =>
            n || a
              ? (0, tM.p5)(d, -32) === tN.R
                ? d
                : (function (e) {
                    let { address: t, data: r, signature: n, to: a = 'hex' } = e,
                      i = (0, tz.SM)([
                        (0, B.E)(
                          [{ type: 'address' }, { type: 'bytes' }, { type: 'bytes' }],
                          [t, r, n]
                        ),
                        tN.R,
                      ]);
                    return 'hex' === a ? i : (0, k.nr)(i);
                  })({ address: n, data: a, signature: d })
              : d)();
        try {
          let t = s
              ? {
                  to: s,
                  data: (0, O.R)({ abi: tD.$o, functionName: 'isValidSig', args: [r, i, f] }),
                  ...c,
                }
              : { data: (0, tI.w)({ abi: tD.$o, args: [r, i, f], bytecode: tT.ST }), ...c },
            { data: n } = await (0, u.s)(e, h.R, 'call')(t);
          return (0, q.XA)(n ?? '0x0');
        } catch (e) {
          try {
            if ((0, Z.E)((0, tR.K)(r), await (0, t_.R)({ hash: i, signature: o }))) return !0;
          } catch {}
          if (e instanceof eU.cg) return !1;
          throw e;
        }
      }
      async function tL(
        e,
        { address: t, message: r, factory: n, factoryData: a, signature: i, ...o }
      ) {
        return tG(e, {
          address: t,
          factory: n,
          factoryData: a,
          hash: (0, tB.r)(r),
          signature: i,
          ...o,
        });
      }
      var t$ = r(3127);
      async function tK(e, t) {
        let {
          address: r,
          factory: n,
          factoryData: a,
          signature: i,
          message: o,
          primaryType: s,
          types: l,
          domain: c,
          ...u
        } = t;
        return tG(e, {
          address: r,
          factory: n,
          factoryData: a,
          hash: (0, t$.Jv)({ message: o, primaryType: s, types: l, domain: c }),
          signature: i,
          ...u,
        });
      }
      var tU = r(1944),
        tH = r(75973),
        tW = r(6675),
        tV = r(84656),
        tj = r(45679),
        tq = r(38350);
      let tJ =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        tY =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      async function tQ(e, t) {
        let {
            address: r,
            domain: n,
            message: a,
            nonce: i,
            scheme: o,
            signature: s,
            time: l = new Date(),
            ...c
          } = t,
          u = (function (e) {
            let { scheme: t, statement: r, ...n } = e.match(tJ)?.groups ?? {},
              {
                chainId: a,
                expirationTime: i,
                issuedAt: o,
                notBefore: s,
                requestId: l,
                ...c
              } = e.match(tY)?.groups ?? {},
              u = e.split('Resources:')[1]?.split('\n- ').slice(1);
            return {
              ...n,
              ...c,
              ...(a ? { chainId: Number(a) } : {}),
              ...(i ? { expirationTime: new Date(i) } : {}),
              ...(o ? { issuedAt: new Date(o) } : {}),
              ...(s ? { notBefore: new Date(s) } : {}),
              ...(l ? { requestId: l } : {}),
              ...(u ? { resources: u } : {}),
              ...(t ? { scheme: t } : {}),
              ...(r ? { statement: r } : {}),
            };
          })(a);
        if (
          !u.address ||
          !(function (e) {
            let {
              address: t,
              domain: r,
              message: n,
              nonce: a,
              scheme: i,
              time: o = new Date(),
            } = e;
            if (
              (r && n.domain !== r) ||
              (a && n.nonce !== a) ||
              (i && n.scheme !== i) ||
              (n.expirationTime && o >= n.expirationTime) ||
              (n.notBefore && o < n.notBefore)
            )
              return !1;
            try {
              if (!n.address || (t && !(0, Z.E)(n.address, t))) return !1;
            } catch {
              return !1;
            }
            return !0;
          })({ address: r, domain: n, message: u, nonce: i, scheme: o, time: l })
        )
          return !1;
        let d = (0, tB.r)(a);
        return tG(e, { address: u.address, hash: d, signature: s, ...c });
      }
      var tZ = r(6257),
        tX = r(5290);
      function t1(e) {
        return {
          call: (t) => (0, h.R)(e, t),
          createAccessList: (t) => v(e, t),
          createBlockFilter: () => S(e),
          createContractEventFilter: (t) => M(e, t),
          createEventFilter: (t) => _(e, t),
          createPendingTransactionFilter: () => z(e),
          estimateContractGas: (t) => $(e, t),
          estimateGas: (t) => (0, L.Q)(e, t),
          getBalance: (t) => (0, H.s)(e, t),
          getBlobBaseFee: () => W(e),
          getBlock: (t) => (0, V.Q)(e, t),
          getBlockNumber: (t) => (0, j.z)(e, t),
          getBlockTransactionCount: (t) => J(e, t),
          getBytecode: (t) => (0, Q.C)(e, t),
          getChainId: () => (0, Y.L)(e),
          getCode: (t) => (0, Q.C)(e, t),
          getContractEvents: (t) => es(e, t),
          getEip712Domain: (t) => ec(e, t),
          getEnsAddress: (t) => (0, a.O)(e, t),
          getEnsAvatar: (t) => (0, i.r)(e, t),
          getEnsName: (t) => (0, o.w)(e, t),
          getEnsResolver: (t) => f(e, t),
          getEnsText: (t) => (0, p.g)(e, t),
          getFeeHistory: (t) => ed(e, t),
          estimateFeesPerGas: (t) => (0, K.X)(e, t),
          getFilterChanges: (t) => ef(e, t),
          getFilterLogs: (t) => ep(e, t),
          getGasPrice: () => (0, eh.o)(e),
          getLogs: (t) => eo(e, t),
          getProof: (t) => ey(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, U._)(e, t),
          getStorageAt: (t) => em(e, t),
          getTransaction: (t) => (0, eg.f)(e, t),
          getTransactionConfirmations: (t) => eb(e, t),
          getTransactionCount: (t) => (0, ew.K)(e, t),
          getTransactionReceipt: (t) => (0, ev.a)(e, t),
          multicall: (t) => (0, eC.A)(e, t),
          prepareTransactionRequest: (t) => (0, tZ.ZE)(e, t),
          readContract: (t) => (0, d.L)(e, t),
          sendRawTransaction: (t) => (0, tX.p)(e, t),
          simulate: (t) => eJ(e, t),
          simulateBlocks: (t) => eJ(e, t),
          simulateCalls: (t) => tk(e, t),
          simulateContract: (t) => (0, tx.a)(e, t),
          verifyMessage: (t) => tL(e, t),
          verifySiweMessage: (t) => tQ(e, t),
          verifyTypedData: (t) => tK(e, t),
          uninstallFilter: (t) => tP(e, t),
          waitForTransactionReceipt: (t) => (0, tU.e)(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = 'latest',
                emitMissed: r = !1,
                emitOnBegin: n = !1,
                onBlock: a,
                onError: i,
                includeTransactions: o,
                poll: s,
                pollingInterval: l = e.pollingInterval,
              }
            ) {
              let c, d, f, p;
              let h =
                  void 0 !== s
                    ? s
                    : 'webSocket' !== e.transport.type &&
                      ('fallback' !== e.transport.type ||
                        'webSocket' !== e.transport.transports[0].config.type),
                y = o ?? !1;
              return h
                ? (() => {
                    let o = (0, tj.P)(['watchBlocks', e.uid, t, r, n, y, l]);
                    return (0, tW.N7)(o, { onBlock: a, onError: i }, (a) =>
                      (0, tV.$)(
                        async () => {
                          try {
                            let n = await (0, u.s)(
                              e,
                              V.Q,
                              'getBlock'
                            )({ blockTag: t, includeTransactions: y });
                            if (n.number && c?.number) {
                              if (n.number === c.number) return;
                              if (n.number - c.number > 1 && r)
                                for (let t = c?.number + 1n; t < n.number; t++) {
                                  let r = await (0, u.s)(
                                    e,
                                    V.Q,
                                    'getBlock'
                                  )({ blockNumber: t, includeTransactions: y });
                                  a.onBlock(r, c), (c = r);
                                }
                            }
                            (!c?.number ||
                              ('pending' === t && !n?.number) ||
                              (n.number && n.number > c.number)) &&
                              (a.onBlock(n, c), (c = n));
                          } catch (e) {
                            a.onError?.(e);
                          }
                        },
                        { emitOnBegin: n, interval: l }
                      )
                    );
                  })()
                : ((d = !0),
                  (f = !0),
                  (p = () => (d = !1)),
                  (async () => {
                    try {
                      n &&
                        (0, u.s)(
                          e,
                          V.Q,
                          'getBlock'
                        )({ blockTag: t, includeTransactions: y }).then((e) => {
                          d && f && (a(e, void 0), (f = !1));
                        });
                      let r = (() => {
                          if ('fallback' === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => 'webSocket' === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: o } = await r.subscribe({
                          params: ['newHeads'],
                          async onData(t) {
                            if (!d) return;
                            let r = await (0, u.s)(
                              e,
                              V.Q,
                              'getBlock'
                            )({ blockNumber: t.blockNumber, includeTransactions: y }).catch(
                              () => {}
                            );
                            d && (a(r, c), (f = !1), (c = r));
                          },
                          onError(e) {
                            i?.(e);
                          },
                        });
                      (p = o), d || p();
                    } catch (e) {
                      i?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchBlockNumber: (t) => (0, tH.q)(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                abi: r,
                address: n,
                args: a,
                batch: i = !0,
                eventName: o,
                fromBlock: s,
                onError: l,
                onLogs: c,
                poll: d,
                pollingInterval: f = e.pollingInterval,
                strict: p,
              } = t;
              return (
                void 0 !== d
                  ? d
                  : 'bigint' == typeof s ||
                    ('webSocket' !== e.transport.type &&
                      ('fallback' !== e.transport.type ||
                        'webSocket' !== e.transport.transports[0].config.type))
              )
                ? (() => {
                    let t = p ?? !1,
                      d = (0, tj.P)(['watchContractEvent', n, a, i, e.uid, o, f, t, s]);
                    return (0, tW.N7)(d, { onLogs: c, onError: l }, (l) => {
                      let c, d;
                      void 0 !== s && (c = s - 1n);
                      let p = !1,
                        h = (0, tV.$)(
                          async () => {
                            if (!p) {
                              try {
                                d = await (0, u.s)(
                                  e,
                                  M,
                                  'createContractEventFilter'
                                )({
                                  abi: r,
                                  address: n,
                                  args: a,
                                  eventName: o,
                                  strict: t,
                                  fromBlock: s,
                                });
                              } catch {}
                              p = !0;
                              return;
                            }
                            try {
                              let s;
                              if (d) s = await (0, u.s)(e, ef, 'getFilterChanges')({ filter: d });
                              else {
                                let i = await (0, u.s)(e, j.z, 'getBlockNumber')({});
                                (s =
                                  c && c < i
                                    ? await (0, u.s)(
                                        e,
                                        es,
                                        'getContractEvents'
                                      )({
                                        abi: r,
                                        address: n,
                                        args: a,
                                        eventName: o,
                                        fromBlock: c + 1n,
                                        toBlock: i,
                                        strict: t,
                                      })
                                    : []),
                                  (c = i);
                              }
                              if (0 === s.length) return;
                              if (i) l.onLogs(s);
                              else for (let e of s) l.onLogs([e]);
                            } catch (e) {
                              d && e instanceof tq.yR && (p = !1), l.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: f }
                        );
                      return async () => {
                        d && (await (0, u.s)(e, tP, 'uninstallFilter')({ filter: d })), h();
                      };
                    });
                  })()
                : (() => {
                    let t = (0, tj.P)(['watchContractEvent', n, a, i, e.uid, o, f, p ?? !1]),
                      s = !0,
                      u = () => (s = !1);
                    return (0, tW.N7)(
                      t,
                      { onLogs: c, onError: l },
                      (t) => (
                        (async () => {
                          try {
                            let i = (() => {
                                if ('fallback' === e.transport.type) {
                                  let t = e.transport.transports.find(
                                    (e) => 'webSocket' === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              l = o ? F({ abi: r, eventName: o, args: a }) : [],
                              { unsubscribe: c } = await i.subscribe({
                                params: ['logs', { address: n, topics: l }],
                                onData(e) {
                                  if (!s) return;
                                  let n = e.result;
                                  try {
                                    let { eventName: e, args: a } = en({
                                        abi: r,
                                        data: n.data,
                                        topics: n.topics,
                                        strict: p,
                                      }),
                                      i = (0, ei.U)(n, { args: a, eventName: e });
                                    t.onLogs([i]);
                                  } catch (i) {
                                    let e, r;
                                    if (i instanceof A.SM || i instanceof A.Gy) {
                                      if (p) return;
                                      (e = i.abiItem.name),
                                        (r = i.abiItem.inputs?.some(
                                          (e) => !('name' in e && e.name)
                                        ));
                                    }
                                    let a = (0, ei.U)(n, { args: r ? [] : {}, eventName: e });
                                    t.onLogs([a]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (u = c), s || u();
                          } catch (e) {
                            l?.(e);
                          }
                        })(),
                        () => u()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: r,
                batch: n = !0,
                event: a,
                events: i,
                fromBlock: o,
                onError: s,
                onLogs: l,
                poll: c,
                pollingInterval: d = e.pollingInterval,
                strict: f,
              }
            ) {
              let p, h;
              let y =
                  void 0 !== c
                    ? c
                    : 'bigint' == typeof o ||
                      ('webSocket' !== e.transport.type &&
                        ('fallback' !== e.transport.type ||
                          'webSocket' !== e.transport.transports[0].config.type)),
                m = f ?? !1;
              return y
                ? (() => {
                    let c = (0, tj.P)(['watchEvent', t, r, n, e.uid, a, d, o]);
                    return (0, tW.N7)(c, { onLogs: l, onError: s }, (s) => {
                      let l, c;
                      void 0 !== o && (l = o - 1n);
                      let f = !1,
                        p = (0, tV.$)(
                          async () => {
                            if (!f) {
                              try {
                                c = await (0, u.s)(
                                  e,
                                  _,
                                  'createEventFilter'
                                )({
                                  address: t,
                                  args: r,
                                  event: a,
                                  events: i,
                                  strict: m,
                                  fromBlock: o,
                                });
                              } catch {}
                              f = !0;
                              return;
                            }
                            try {
                              let o;
                              if (c) o = await (0, u.s)(e, ef, 'getFilterChanges')({ filter: c });
                              else {
                                let n = await (0, u.s)(e, j.z, 'getBlockNumber')({});
                                (o =
                                  l && l !== n
                                    ? await (0, u.s)(
                                        e,
                                        eo,
                                        'getLogs'
                                      )({
                                        address: t,
                                        args: r,
                                        event: a,
                                        events: i,
                                        fromBlock: l + 1n,
                                        toBlock: n,
                                      })
                                    : []),
                                  (l = n);
                              }
                              if (0 === o.length) return;
                              if (n) s.onLogs(o);
                              else for (let e of o) s.onLogs([e]);
                            } catch (e) {
                              c && e instanceof tq.yR && (f = !1), s.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: d }
                        );
                      return async () => {
                        c && (await (0, u.s)(e, tP, 'uninstallFilter')({ filter: c })), p();
                      };
                    });
                  })()
                : ((p = !0),
                  (h = () => (p = !1)),
                  (async () => {
                    try {
                      let n = (() => {
                          if ('fallback' === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => 'webSocket' === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        o = i ?? (a ? [a] : void 0),
                        c = [];
                      o &&
                        ((c = [o.flatMap((e) => F({ abi: [e], eventName: e.name, args: r }))]),
                        a && (c = c[0]));
                      let { unsubscribe: u } = await n.subscribe({
                        params: ['logs', { address: t, topics: c }],
                        onData(e) {
                          if (!p) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: r } = en({
                                abi: o ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              n = (0, ei.U)(t, { args: r, eventName: e });
                            l([n]);
                          } catch (a) {
                            let e, r;
                            if (a instanceof A.SM || a instanceof A.Gy) {
                              if (f) return;
                              (e = a.abiItem.name),
                                (r = a.abiItem.inputs?.some((e) => !('name' in e && e.name)));
                            }
                            let n = (0, ei.U)(t, { args: r ? [] : {}, eventName: e });
                            l([n]);
                          }
                        },
                        onError(e) {
                          s?.(e);
                        },
                      });
                      (h = u), p || h();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  () => h());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: r,
                onTransactions: n,
                poll: a,
                pollingInterval: i = e.pollingInterval,
              }
            ) {
              let o, s;
              return (void 0 !== a ? a : 'webSocket' !== e.transport.type)
                ? (() => {
                    let a = (0, tj.P)(['watchPendingTransactions', e.uid, t, i]);
                    return (0, tW.N7)(a, { onTransactions: n, onError: r }, (r) => {
                      let n;
                      let a = (0, tV.$)(
                        async () => {
                          try {
                            if (!n)
                              try {
                                n = await (0, u.s)(e, z, 'createPendingTransactionFilter')({});
                                return;
                              } catch (e) {
                                throw (a(), e);
                              }
                            let i = await (0, u.s)(e, ef, 'getFilterChanges')({ filter: n });
                            if (0 === i.length) return;
                            if (t) r.onTransactions(i);
                            else for (let e of i) r.onTransactions([e]);
                          } catch (e) {
                            r.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: i }
                      );
                      return async () => {
                        n && (await (0, u.s)(e, tP, 'uninstallFilter')({ filter: n })), a();
                      };
                    });
                  })()
                : ((o = !0),
                  (s = () => (o = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ['newPendingTransactions'],
                        onData(e) {
                          if (!o) return;
                          let t = e.result;
                          n([t]);
                        },
                        onError(e) {
                          r?.(e);
                        },
                      });
                      (s = t), o || s();
                    } catch (e) {
                      r?.(e);
                    }
                  })(),
                  () => s());
            })(e, t),
        };
      }
      function t0(e) {
        let { key: t = 'public', name: r = 'Public Client' } = e;
        return (0, n.e)({ ...e, key: t, name: r, type: 'publicClient' }).extend(t1);
      }
    },
    67329: function (e, t, r) {
      r.d(t, {
        R: function () {
          return n;
        },
        Z: function () {
          return a;
        },
      });
      let n = '0x6492649264926492649264926492649264926492649264926492649264926492',
        a = '0x0000000000000000000000000000000000000000000000000000000000000000';
    },
    83094: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return i;
        },
        o: function () {
          return a;
        },
      });
      var n = r(77854);
      class a extends n.G {
        constructor({ docsPath: e } = {}) {
          super(
            'Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.',
            { docsPath: e, docsSlug: 'account', name: 'AccountNotFoundError' }
          );
        }
      }
      class i extends n.G {
        constructor({ docsPath: e, metaMessages: t, type: r }) {
          super(`Account type "${r}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: 'AccountTypeNotSupportedError',
          });
        }
      }
    },
    32569: function (e, t, r) {
      r.d(t, {
        E: function () {
          return i;
        },
      });
      var n = r(48141),
        a = r(84545);
      function i(e, t) {
        if (!(0, a.U)(e, { strict: !1 })) throw new n.b({ address: e });
        if (!(0, a.U)(t, { strict: !1 })) throw new n.b({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    88982: function (e, t, r) {
      r.d(t, {
        q: function () {
          return a;
        },
      });
      var n = r(22268);
      function a({ chain: e, currentChainId: t }) {
        if (!e) throw new n.Bk();
        if (t !== e.id) throw new n.Yl({ chain: e, currentChainId: t });
      }
    },
    35970: function (e, t, r) {
      r.d(t, {
        $: function () {
          return o;
        },
      });
      var n = r(42850),
        a = r(59134),
        i = r(18626);
      function o(e, { docsPath: t, ...r }) {
        let o = (() => {
          let t = (0, i.k)(e, r);
          return t instanceof n.cj ? e : t;
        })();
        return new a.mk(o, { docsPath: t, ...r });
      }
    },
    6675: function (e, t, r) {
      r.d(t, {
        N7: function () {
          return o;
        },
      });
      let n = new Map(),
        a = new Map(),
        i = 0;
      function o(e, t, r) {
        let o = ++i,
          s = () => n.get(e) || [],
          l = () => {
            let t = s();
            n.set(
              e,
              t.filter((e) => e.id !== o)
            );
          },
          c = () => {
            let t = s();
            if (!t.some((e) => e.id === o)) return;
            let r = a.get(e);
            1 === t.length && r && r(), l();
          },
          u = s();
        if ((n.set(e, [...u, { id: o, fns: t }]), u && u.length > 0)) return c;
        let d = {};
        for (let e in t)
          d[e] = (...t) => {
            let r = s();
            if (0 !== r.length) for (let n of r) n.fns[e]?.(...t);
          };
        let f = r(d);
        return 'function' == typeof f && a.set(e, f), c;
      }
    },
    84656: function (e, t, r) {
      r.d(t, {
        $: function () {
          return a;
        },
      });
      var n = r(22836);
      function a(e, { emitOnBegin: t, initialWaitTime: r, interval: a }) {
        let i = !0,
          o = () => (i = !1);
        return (
          (async () => {
            let s;
            t && (s = await e({ unpoll: o }));
            let l = (await r?.(s)) ?? a;
            await (0, n.D)(l);
            let c = async () => {
              i && (await e({ unpoll: o }), await (0, n.D)(a), c());
            };
            c();
          })(),
          o
        );
      }
    },
    91542: function (e, t, r) {
      r.d(t, {
        L: function () {
          return i;
        },
      });
      var n = r(8256),
        a = r(84699);
      function i(e, t = 'wei') {
        return (0, a.v)(e, n.Zn[t]);
      }
    },
    52420: function (e, t, r) {
      r.d(t, {
        j: function () {
          return M;
        },
      });
      var n = r(83559),
        a = r(67329),
        i = r(6153),
        o = r(26836),
        s = r(48666),
        l = r(79150);
      let c = [
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'accountAddress', type: 'address' },
            {
              indexed: !1,
              internalType: 'enum IContractDeployer.AccountNonceOrdering',
              name: 'nonceOrdering',
              type: 'uint8',
            },
          ],
          name: 'AccountNonceOrderingUpdated',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'accountAddress', type: 'address' },
            {
              indexed: !1,
              internalType: 'enum IContractDeployer.AccountAbstractionVersion',
              name: 'aaVersion',
              type: 'uint8',
            },
          ],
          name: 'AccountVersionUpdated',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'deployerAddress', type: 'address' },
            { indexed: !0, internalType: 'bytes32', name: 'bytecodeHash', type: 'bytes32' },
            { indexed: !0, internalType: 'address', name: 'contractAddress', type: 'address' },
          ],
          name: 'ContractDeployed',
          type: 'event',
        },
        {
          inputs: [
            { internalType: 'bytes32', name: '_salt', type: 'bytes32' },
            { internalType: 'bytes32', name: '_bytecodeHash', type: 'bytes32' },
            { internalType: 'bytes', name: '_input', type: 'bytes' },
          ],
          name: 'create',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'bytes32', name: '_salt', type: 'bytes32' },
            { internalType: 'bytes32', name: '_bytecodeHash', type: 'bytes32' },
            { internalType: 'bytes', name: '_input', type: 'bytes' },
          ],
          name: 'create2',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'bytes32', name: '_salt', type: 'bytes32' },
            { internalType: 'bytes32', name: '_bytecodeHash', type: 'bytes32' },
            { internalType: 'bytes', name: '_input', type: 'bytes' },
            {
              internalType: 'enum IContractDeployer.AccountAbstractionVersion',
              name: '_aaVersion',
              type: 'uint8',
            },
          ],
          name: 'create2Account',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'bytes32', name: '', type: 'bytes32' },
            { internalType: 'bytes32', name: '_bytecodeHash', type: 'bytes32' },
            { internalType: 'bytes', name: '_input', type: 'bytes' },
            {
              internalType: 'enum IContractDeployer.AccountAbstractionVersion',
              name: '_aaVersion',
              type: 'uint8',
            },
          ],
          name: 'createAccount',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
          name: 'extendedAccountVersion',
          outputs: [
            {
              internalType: 'enum IContractDeployer.AccountAbstractionVersion',
              name: '',
              type: 'uint8',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'bytes32', name: '_keccak256BytecodeHash', type: 'bytes32' }],
          name: 'forceDeployKeccak256',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [
            {
              components: [
                { internalType: 'bytes32', name: 'bytecodeHash', type: 'bytes32' },
                { internalType: 'address', name: 'newAddress', type: 'address' },
                { internalType: 'bool', name: 'callConstructor', type: 'bool' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
                { internalType: 'bytes', name: 'input', type: 'bytes' },
              ],
              internalType: 'struct ContractDeployer.ForceDeployment',
              name: '_deployment',
              type: 'tuple',
            },
            { internalType: 'address', name: '_sender', type: 'address' },
          ],
          name: 'forceDeployOnAddress',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [
            {
              components: [
                { internalType: 'bytes32', name: 'bytecodeHash', type: 'bytes32' },
                { internalType: 'address', name: 'newAddress', type: 'address' },
                { internalType: 'bool', name: 'callConstructor', type: 'bool' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
                { internalType: 'bytes', name: 'input', type: 'bytes' },
              ],
              internalType: 'struct ContractDeployer.ForceDeployment[]',
              name: '_deployments',
              type: 'tuple[]',
            },
          ],
          name: 'forceDeployOnAddresses',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
          name: 'getAccountInfo',
          outputs: [
            {
              components: [
                {
                  internalType: 'enum IContractDeployer.AccountAbstractionVersion',
                  name: 'supportedAAVersion',
                  type: 'uint8',
                },
                {
                  internalType: 'enum IContractDeployer.AccountNonceOrdering',
                  name: 'nonceOrdering',
                  type: 'uint8',
                },
              ],
              internalType: 'struct IContractDeployer.AccountInfo',
              name: 'info',
              type: 'tuple',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'address', name: '_sender', type: 'address' },
            { internalType: 'uint256', name: '_senderNonce', type: 'uint256' },
          ],
          name: 'getNewAddressCreate',
          outputs: [{ internalType: 'address', name: 'newAddress', type: 'address' }],
          stateMutability: 'pure',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'address', name: '_sender', type: 'address' },
            { internalType: 'bytes32', name: '_bytecodeHash', type: 'bytes32' },
            { internalType: 'bytes32', name: '_salt', type: 'bytes32' },
            { internalType: 'bytes', name: '_input', type: 'bytes' },
          ],
          name: 'getNewAddressCreate2',
          outputs: [{ internalType: 'address', name: 'newAddress', type: 'address' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'enum IContractDeployer.AccountAbstractionVersion',
              name: '_version',
              type: 'uint8',
            },
          ],
          name: 'updateAccountVersion',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'enum IContractDeployer.AccountNonceOrdering',
              name: '_nonceOrdering',
              type: 'uint8',
            },
          ],
          name: 'updateNonceOrdering',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ];
      var u = r(85465);
      let d = '/docs/contract/encodeDeployData';
      function f(e, t, r, n) {
        let a = [t, r, n];
        return {
          create: { functionName: 'create', argsContractDeployer: a },
          create2: { functionName: 'create2', argsContractDeployer: a },
          createAccount: { functionName: 'createAccount', argsContractDeployer: [...a, 1] },
          create2Account: { functionName: 'create2Account', argsContractDeployer: [...a, 1] },
        }[e || 'create'];
      }
      var p = r(39858),
        h = r(59383),
        y = r(6257),
        m = r(5290),
        g = r(83094),
        b = r(88982),
        w = r(35970),
        v = r(72427),
        C = r(64233),
        S = r(85162),
        A = r(35328);
      function E(e) {
        if (!(0, A.W)(e)) throw new S.l();
        (0, C.F)(e);
      }
      var T = r(14999);
      async function k(e, t) {
        let { account: r = e.account, chain: n = e.chain, ...a } = t;
        if (!r) throw new g.o({ docsPath: '/docs/actions/wallet/signTransaction' });
        let i = (0, p.T)(r);
        (0, C.F)({ account: i, ...t });
        let o = await (0, v.s)(e, h.L, 'getChainId')({});
        null !== n && (0, b.q)({ currentChainId: o, chain: n });
        let s = n?.formatters || e.chain?.formatters,
          c = s?.transactionRequest?.format || T.tG;
        return i.signTransaction
          ? i.signTransaction(
              { ...a, chainId: o },
              { serializer: e.chain?.serializers?.transaction }
            )
          : await e.request(
              {
                method: 'eth_signTransaction',
                params: [{ ...c(a), chainId: (0, l.eC)(o), from: i.address }],
              },
              { retryCount: 0 }
            );
      }
      var x = r(52044);
      async function P(e, t) {
        let { account: r = e.account, domain: n, message: a, primaryType: i } = t;
        if (!r) throw new g.o({ docsPath: '/docs/actions/wallet/signTypedData' });
        let o = (0, p.T)(r),
          s = { EIP712Domain: (0, x.cj)({ domain: n }), ...t.types };
        if (((0, x.iC)({ domain: n, message: a, primaryType: i, types: s }), o.signTypedData))
          return o.signTypedData({ domain: n, message: a, primaryType: i, types: s });
        let l = (0, x.H6)({ domain: n, message: a, primaryType: i, types: s });
        return e.request(
          { method: 'eth_signTypedData_v4', params: [o.address, l] },
          { retryCount: 0 }
        );
      }
      var B = r(77854);
      async function D(e, t) {
        let { account: r = e.account, chain: n = e.chain, ...a } = t,
          i = r ? (0, p.T)(r) : e.account;
        if (!i) throw new g.o({ docsPath: '/docs/actions/wallet/signTransaction' });
        if ((E({ account: i, chain: n, ...t }), !n?.custom?.getEip712Domain))
          throw new B.G('`getEip712Domain` not found on chain.');
        if (!n?.serializers?.transaction)
          throw new B.G('transaction serializer not found on chain.');
        let o = await (0, v.s)(e, h.L, 'getChainId')({});
        null !== n && (0, b.q)({ currentChainId: o, chain: n });
        let s = n?.custom.getEip712Domain({ ...a, chainId: o, from: i.address, type: 'eip712' }),
          l = await P(e, { ...s, account: i });
        return n?.serializers?.transaction(
          { chainId: o, ...a, customSignature: l, type: 'eip712' },
          { r: '0x0', s: '0x0', v: 0n }
        );
      }
      async function I(e, t) {
        return (0, A.W)(t) ? D(e, t) : await k(e, t);
      }
      async function R(e, t) {
        let { account: r = e.account, chain: n = e.chain } = t,
          a = r ? (0, p.T)(r) : e.account;
        if (!a) throw new g.o({ docsPath: '/docs/actions/wallet/sendTransaction' });
        try {
          let r;
          E(t);
          let i = await (0, y.ZE)(e, {
            ...t,
            nonceManager: a.nonceManager,
            parameters: ['gas', 'nonce', 'fees'],
          });
          null !== n &&
            ((r = await (0, v.s)(e, h.L, 'getChainId')({})),
            (0, b.q)({ currentChainId: r, chain: n }));
          let o = await I(e, { ...i, chainId: r });
          return await (0, v.s)(e, m.p, 'sendRawTransaction')({ serializedTransaction: o });
        } catch (e) {
          throw (0, w.$)(e, { ...t, account: a, chain: n });
        }
      }
      var F = r(81288);
      async function N(e, t) {
        return (0, A.W)(t) ? R(e, t) : (0, F.T)(e, t);
      }
      function M() {
        return (e) => ({
          sendTransaction: (t) => N(e, t),
          signTransaction: (t) => I(e, t),
          deployContract: (t) =>
            (function (e, t) {
              let { abi: r, args: n, bytecode: p, deploymentType: h, salt: y, ...m } = t,
                g = (function (e) {
                  let { abi: t, args: r, bytecode: n, deploymentType: p, salt: h } = e;
                  if (!r || 0 === r.length) {
                    let { functionName: e, argsContractDeployer: t } = f(
                      p,
                      h ?? a.Z,
                      (0, l.NC)((0, u.x)(n)),
                      '0x'
                    );
                    return (0, s.R)({ abi: c, functionName: e, args: t });
                  }
                  let y = t.find((e) => 'type' in e && 'constructor' === e.type);
                  if (!y) throw new i.fM({ docsPath: d });
                  if (!('inputs' in y) || !y.inputs || 0 === y.inputs.length)
                    throw new i.cO({ docsPath: d });
                  let m = (0, o.E)(y.inputs, r),
                    { functionName: g, argsContractDeployer: b } = f(
                      p,
                      h ?? a.Z,
                      (0, l.NC)((0, u.x)(n)),
                      m
                    );
                  return (0, s.R)({ abi: c, functionName: g, args: b });
                })({ abi: r, args: n, bytecode: p, deploymentType: h, salt: y });
              return (
                (m.factoryDeps = m.factoryDeps || []),
                m.factoryDeps.includes(p) || m.factoryDeps.push(p),
                R(e, {
                  ...m,
                  data: g,
                  to:
                    'create2' === h || 'create2Account' === h
                      ? '0x0000000000000000000000000000000000010000'
                      : '0x0000000000000000000000000000000000008006',
                })
              );
            })(e, t),
          writeContract: (t) => (0, n.n)(Object.assign(e, { sendTransaction: (t) => N(e, t) }), t),
        });
      }
    },
  },
]);
