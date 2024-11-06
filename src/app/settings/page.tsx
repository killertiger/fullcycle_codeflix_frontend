import { getAppSettings } from "../lib/settings";

async function Settings() {
    const {
        theme,
        language,
    } = await getAppSettings();

    return (
        <div>
            <h1>Settings page</h1>
            <div className="border border-dashed border-red-500 p-4">
                <p>Theme: {theme}</p>
                <p>Language: {language}</p>
            </div>
        </div>
    )
}

export default Settings;