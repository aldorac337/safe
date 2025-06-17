(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = '3a7cc9ca-f462-4ee1-a377-da5562528978'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-3a7cc9ca-f462-4ee1-a377-da5562528978'));
  } catch (y) {}
})();
const n = '_metalGreyGradient_6a880_9',
  a = '_goldGradient_6a880_15',
  i = '_silverGradient_6a880_21',
  s = '_bronzeGradient_6a880_27',
  o = '_pointsSilverTextGradient_6a880_33',
  r = '_input_6a880_39',
  _ = '_slider_6a880_42',
  d = '_title_6a880_45',
  c = '_warning_6a880_48',
  l = '_warnings_6a880_54',
  p = '_stats_6a880_66',
  f = '_statsItem_6a880_72',
  G = '_statsSimupationWrapper_6a880_76',
  b = '_notificationMb_6a880_81',
  g = '_notificationMt_6a880_84',
  u = '_epochResetText_6a880_87',
  m = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_6a880_1',
    metalGreyGradient: n,
    goldGradient: a,
    silverGradient: i,
    bronzeGradient: s,
    pointsSilverTextGradient: o,
    input: r,
    slider: _,
    title: d,
    warning: c,
    warnings: l,
    stats: p,
    statsItem: f,
    statsSimupationWrapper: G,
    notificationMb: b,
    notificationMt: g,
    epochResetText: u,
  };
export { m as s };
//# sourceMappingURL=DepositForm.module-CaastT4u.js.map
