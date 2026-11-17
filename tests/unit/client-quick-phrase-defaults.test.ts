import { describe, expect, it } from "vitest";
import { DEFAULT_CLIENT_SETTINGS } from "../../server/client-state.js";
import { QUICK_PHRASE_DEFAULT_KEYS } from "../../web/src/quick-phrases.js";
import { zh } from "../../web/src/i18n.js";

/**
 * 默认快捷短语是界面文案，必须跟随界面语言：服务端默认值不能再写死某一种语言，
 * 否则英文界面会显示中文短语（真实故障：server/client-state.ts 曾硬编码中文数组）。
 */
describe("默认快捷短语与语言无关", () => {
	it("服务端默认值为空，交由浏览器端按当前语言播种", () => {
		expect(DEFAULT_CLIENT_SETTINGS.quickPhrases).toEqual([]);
	});

	it("每个默认短语 key 都在词典里（中英都有翻译）", () => {
		expect(QUICK_PHRASE_DEFAULT_KEYS.length).toBeGreaterThan(0);
		for (const key of QUICK_PHRASE_DEFAULT_KEYS) expect(zh, key).toHaveProperty(key);
	});
});
