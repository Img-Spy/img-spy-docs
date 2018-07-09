const autoSaveSettings = (
    action$: EpicObservable<any>,
    store: Store<ImgSpyState>
) =>
action$
    .ofType(
        actions.UPDATE_SETTINGS,
        actions.UPDATE_SOURCE,
        actions.UPDATE_THEME)
    .debounceTime(100)
    .mapTo(applySettings({close: false}));
