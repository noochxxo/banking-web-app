import { themeQuartz } from 'ag-grid-community';

// to use myTheme in an application, pass it to the theme grid option
export const PinkTheme = themeQuartz
	.withParams({
        accentColor: "#ffe6f2",
        backgroundColor: "#7f5af0",
        borderColor: "#f7a4ff",
        borderRadius: 2,
        browserColorScheme: "light",
        cellHorizontalPaddingScale: 0.7,
        chromeBackgroundColor: {
            ref: "backgroundColor"
        },
        columnBorder: false,
        fontFamily: {
            googleFont: "Inter"
        },
        fontSize: 13,
        foregroundColor: "#F2F5F9",
        headerBackgroundColor: "#6f54a6",
        headerFontSize: 13,
        headerFontWeight: 400,
        headerTextColor: "#F6F9FF",
        rowBorder: true,
        rowVerticalPaddingScale: 1,
        sidePanelBorder: true,
        spacing: 6,
        wrapperBorder: false,
        wrapperBorderRadius: 10
    });
