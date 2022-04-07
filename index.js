namespace(function () {

    const PROGRESS = [
        {
            '_name': 'cross',
            'hash': -696375375,
            'puzzles': 24,
            'endPoint': [4, 10],
            'URL': window.NAME + "/#vs1_v4_AYABAg~4AQAAAICAAICBAAIHAAcAAAC~5AOP--gBboLEAW6Cx~6ABIRmMARpD-AKHs-wCI--8A--8i~~v4_AYACAhwAAAUAAAIEBAAEAgAEAAg~AAg~4ADj--4AW6CxAFugsQ~6ASEZjAEaQ-wCh7P8AiP--AP--Ig__~~v4_AYACAg~4AcAAgMDBAQEAgIABAECAwAIHAAAIAAgACAAAgAg~5AOP--gBboLEAW6Cx~6ABIRmMARpD-AKHs-wCI--8A--8i~~v4_AYACAg~4AUAAAIEBAAEAAIEAAgeABwAH~4Ag~4ADj--4AW6CxAFugsQ~6ASEZjAEaQ-wCh7P8AiP--AP--Ig__~~v4_AYADAw~4AgAAQIDBAUGBgACAgAEBgEGAAgeABwAABAcAAAQHgAAAg~4ADj--4AW6CxAFugsQ~6ASEZjAEaQ-wCh7P8AiP--AP--Ig__~~v4_AYADAw~4AcAAQIDAwQGAAYCAAYEBgAIHgAcAAAQABAcAAAC~5AOP--gBboLEAW6Cx~6ABIRmMARpD-AKHs-wCI--8A--8i~~v4_AYADAw~4AcAAAIEBQYGAAQABgACBgAIHAAcABwAABAcAAACAAAFAAEBAQIBAAECAQIAAgACAwIDAgMA4--.AFugsQBboLE~6AEhGYwBGkP8Aoez-AIj--wD--yI_~~v4_AYADAw~4AQAAgQGAAQCBgAIHAAcAAACAAAEAAEBAgIAAgICAwIDAgACAwDj--4AW6CxAFugsQ~6ASEZjAEaQ-wCh7P8AiP--AP--Ig__~~v4_AYADAw~4AMABAYABgYACBwAAAIAAAUAAAECAgECAQABAgACAwIDAgMCAADj--4AW6CxAFugsQ~6ASEZjAEaQ-wCh7P8AiP--AP--Ig__~~v4_AYAEB~5AYAAAIGBggABQACCAgACAAQHAAcABwAAAIAAAgAAAEBAgIDAwEDAAIBAwACAgMCAwIAAgACAAIAAgMCAwDj--4AW6CxAFugsQ~6ASEZjAEaQ-wCh7P8AiP--AP--Ig__~~v4_AaADAw~4AgAAAIEBAUGBgAGAgAEAAEGHAAACBwAAAEcAAAgACAc~4AB~4AQIBAgABAgACAwIDAgAA4--uAClVMABbsWY~6AEZjVABG-08A3v.hAIj--wD--yI_~~v4_AaAEB~5AYABAQEBAgEAAQGCAQcAAABAAgcAAAIH~5Ao~4ABAQICAwMDAAEDAAIBAgABAwIAAwwCAAIDAgMCAAIDAgMDDAIAAOP-7gApVTAAW7Fm~6ABGY1QARv9PAN7-oQCI--8A--8i~~v4_AaAEB~5AkAAQECAgQGBggHBAgABAgABAAAIAAQACAcAAAIHAAcAAAIAAEAAAY~4ADAwMAAQIBAgMDAAIAAwACAAIAAwAA4--uAClVMABbsWY~6AEZjVABG-08A3v.hAIj--wD--yI_~~v4_AaAEB~5Ao~4ADBAQEBQYIAgQIAAEDCAAHCB4AHAAACAAgACAAIBwAACAeAAAEAAAH~5AQICAwABAwIBAwADAAMDAgACAwIDAwACAADj-.4AKVUwAFuxZg~6ARmNUAEb-TwDe-6EAiP--AP--Ig__~~v4_AaADAw~4AMAAgYGBAAACBwAAAEAAAMAAQIAAQISDAABEgwAAxIMAAMA.f-jAEtVKQCxoVs~6AGNVRgD-zkYA--2hAIj--wD--yI_~~v4_AaADAw~4AYAAAIEBgYABgIEAAYcAAAIHgAeAAABH~5AMAAgIBAAIcDAAxHAwAERwMABEA.f-jAEtVKQCxoVs~6AGNVRgD-zkYA--2hAIj--wD--yI_~~v4_AaAEB~5AcAAAIEBggIAAgGBwIACBwAAAgcAAAQH~4ARw~4ACAQIBAhwMAEccDABHAPn-4wBLVSkAsaFb~6ABjVUYA-85GAP-9oQCI--8A--8i~~v4_AaABAg~4AMAAAICBAAbAAAIAAI~5A.--jAFFVKQCxqFs~6AGFjRgD-40YA-.GhAIj--wD--yI_~~v4_AaABAg~4AQAAAICAgQAAhwAAAgAAhs~6APv-4wBRVSkAsahb~6ABhY0YA-.NGAP-hoQCI--8A--8i~~v4_AaACAg~4AUAAgICBAQAAgQAAAgeABsAH~4AQ~4AD7-.MAUVUpALGoWw~6AYWNGAP-jRgD-4aEAiP--AP--Ig__~~v4_AaADAw~4AUAAAIGBgIGBgAEGwAACBsAAAIb~5AwABAgABAgIDAgMCAAD7-.MAUVUpALGoWw~6AYWNGAP-jRgD-4aEAiP--AP--Ig__~~v4_AaADAw~4AYAAAIEBgYCBgYAAAQcAAAIGwAbAAACH~5AMAAQIBAQECAAIDAgAA.--jAFFVKQCxqFs~6AGFjRgD-40YA-.GhAIj--wD--yI_~~v4_AaAEB~5AcABAQHCAgIAAAEBgAECBwAGwAACB4AHAAbAAACAAACAAEAAxwMAAMcDAADAPv-4wBRVSkAsahb~6ABhY0YA-.NGAP-hoQCI--8A--8i~~v4_AaAKCgAAAEg~6AQICAgICAgIEBAQEBAYGBgYGBwcICAkJCQkJCQoKCgoKCwsLCwsLCwsMDAwMDQ0ODg4OEBAQEBAQEhISEhIUFBQUFBQICxAUFAACAwQGChIECAsQFAIICg4TAgwLFAACBgoMDgQJCg8SAgYICgwQEhQCBgsQDBQECAsQAAQGCQ4SAgQICxQAAQQLDRAcAAAgH~4AwAQGwAcAAAQHAAcABwAHAAbABsAACAcABsAGwAcABwAGwAAEAAQABAAIBwAACAAIAAgACAAIAAgHAAAIAAIACAcAAAgACAAIAAgACAAIAAgACAcABsAACAcAAAQABAcABsAACAbABsAGwAcAAAgGwAcABsAGwAcAAAgGwAAAgAQHAAAIAAQGw~6ARUVFAMLCwgDCwsI~6AG5ubgD---8A~4-AIj--wD--yI_"
        }, {
            '_name': 'curve',
            'hash': 1161798972,
            'puzzles': 17,
            'endPoint': [6, 10],
            'URL': window.NAME + "/#vs1_v3_AQICEAAACAAABgI~9ABw~AABgU~4AHAP8AenJsAFRJQACrn5IA~4-AHpybADjiUUA~4-AIj--wD--yL-~~v3_AQECEAYF~7ANAAAN~8ABgL-AHpybABUSUAAq5.SAP---wB6cmwA44lFAP---wCI--8A--8i-w__~~v3_AQICEAYFAA0~BA0~5ADQ~AADQAABgL-AHpybABUSUAAq5.SAP---wB6cmwA44lFAP---wCI--8A--8i-w__~~v3_AQICE~5AYU~7AGFAYFAA0AAAYC~6AYU~4ABhQA-wB6cmwAVElAAKufkgD---8AenJsAOOJRQD---8AiP--AP--Iv8_~~v3_AQICEAYFAA0~GAO~8ABQ~5AGAv8AenJsAFRJQACrn5IA~4-AHpybADjiUUA~4-AIj--wD--yL-~~v3_AQMDEA0AAAcAAA0AAAYC~AAcAAA0AAAcAAA0~BA0AAAcAAA0AAAc~BAYFAA0AAAcAAA0A-wB6cmwAVElAAKufkgD---8AenJsAOOJRQD---8AiP--AP--Iv8_~~v3_AQMDEA0AAA0AAA0AAAYCAAEAAAD-~5Af~4-8ADQAADQAADQAADQ~AADQAADQAADQAADQAAAf~4-8~4AB~4A-wAGBQANAAANAAANAP8AenJsAFRJQACrn5IA~4-AHpybADjiUUA~4-AIj--wD--yL-~~v4_AaADAw~4AcAAAIEBAYGAAYEAgMABhUAAAgVABUAABAAAhU~4ADAAECAgEAAgADAAIAAHpsbABeSkoAq5KSAP---wB6bGwA44lFAP---wCI--8A--8i~~v4_AaAEBBYAAAIACAgAAAgAAgAAAQEABQkBAHpsbABeSkoAq5KSAP---wB6bGwA44lFAP---wCI--8A--8i~~v4_AaAEB~5AcAAgQEBAYICAQCBgcEAAAIFgAWABYAABAcAAACAAACAQIBAhwJAGMcCQBjAHpsbABeSkoAq5KSAP---wB6bGwA44lFAP---wCI--8A--8i~~v4_AaAEB~5AcAAAIEBggIBggCBwIABhYAAAgcAAAQFgAAAhw~4ACAQIBAhwJACccCQAnAHpsbABeSkoAq5KSAP---wB6bGwA44lFAP---wCI--8A--8i~~v4_AaAEB~5AgAAAICBAYGCAQIAAQCAAgAFgAACBwAHAAWABwAFgAAAgAABAEBAgIBAgECHAkAYxwJAAEcCQABHAkAAQB6bGwAXkpKAKuSkgD---8AemxsAOOJRQD---8AiP--AP--Ig__~~v4_AaAEB~5AYAAgQEBggIAgAIBAAACBUAGwAbABUAAAIAAAgAAAEBAgIDAwIDAQMAAgABAwkDCQIJAwkDCQIJAwkDCQB6bGwAXkpKAKuSkgD---8AemxsAOOJRQD---8AiP--AP--Ig__~~v4_AaAGBhYAAAkAAAEDBgYKCwwAAQQIAQUJBAAACAAQABAAEAAQABAAEAAQAAE~5AemxsAF5KSgCrkpIA~4-AHpsbADjdEUA~4-AIj--wD--yI_~~v4_AaAEB~5AQABAYICAYACAAIFgAWAAACAAAEAAECAwMCAQAcCQAhHAkAIRwJACEcCQAhAHpsbABeSkoAq5KSAP---wB6bGwA44lFAP---wCI--8A--8i~~v4_AaAEB~5AcCAgIDBgYGAgYIAgABBhYAAAgWAAAQAAQAIBY~4AGAAABAgMDAAMBAgADAgMCAwIAAgACAwIDAHpsbABeSkoAq5KSAP---wB6bGwA44lFAP---wCI--8A--8i~~v4_AaAJCRYAACcAAAECAgICAgMEBAQEBAUFBgYGBggKCgwMDAwMDAwNDg4QEBAQEhIKEgQIDA4PEAYCAwQGCgoSCAwOEAoICwIEBQYKDhAQCBAEBgoQAAg~4AIABAAABUAFQAAEBUAABAVAAAQFQAV~5ABAAEAAAFQAVABU~8AQFQAVAAAQFQAAABUAFQAAEAAAFQAVABU~4AVABYC~8ARUVFAMLCwgDCwsIA~4-AG5ubgD---8A~4-AIj--wD--yI_"
        }, {
            '_name': 'pentagon',
            'hash': -1297062205,
            'puzzles': 18,
            'endPoint': [7, 12],
            'URL': window.NAME + "/#vs1_v2_AQIQ~6AEAAAD-AAYFAAYCAAH~5-~5AP8A4.b-AAA66QAAOuk~8AggAAajP8A~4-AIj--wD--yL-~~v2_AQIQ~6AMAAAD-AAYFAAYCAAP~5-~5AP8A4.b-AAA66QAAOuk~8AggAAajP8A~4-AIj--wD--yL-~~v2_AgIQBgU~7AMAAAD-AAMAAAD-~AAP~5-AAP~5-~6AYKBgL-AOPm-wAAOukAADrp~8AIIAAGoz-AP---wCI--8A--8i-w__~~v2_AgIQBgU~7AMAAAD-AAMAAAD-~AAP~5-AAP~5-Bgo~5ABgL-AOPm-wAAOukAADrp~8AIIAAGoz-AP---wCI--8A--8i-w__~~v2_AwMQ~BAD~4A-wAD~4A-wAD~4A-w~CAMAAAD-AAP~5-AAMAAAD-~AAYCAAP~5-AAP~5-AAP~5-AAYF~8A-wDj5v8AADrpAAA66Q~7ACCAABqM-wD---8AiP--AP--Iv8_~~v2_AwMQBgE~AAwAAAP8AAwAAAP8AAwAAAP8~CAD~4A-wAD~5-wAD~4A-w~CAP~5-AAP~5-AAP~5-AAYF~8A-wDj5v8AADrpAAA66Q~7ACCAABqM-wD---8AiP--AP--Iv8_~~v2_AQIQ~6AEAAAD-AAYFAAYCAAP~5-~5AP8A4.b-AAA66QAAOuk~8AggAAajP8A~4-AIj--wD--yL-~~v2_AQIQ~6AEAAAD-AAYFBgoGAgAD~5-w~4AD-AOPm-wAAOukAADrp~8AIIAAGoz-AP---wCI--8A--8i-w__~~v2_AQIQ~6AEAAAD-AAYFAAYCAAMAAAD-~5AP8A4.b-AE4A6QBOAOk~6ACsAgACMGv8A~4-AIj--wD--yL-~~v2_AQIQ~6AH~5-AAYFAAYCAAP~5-~5AP8A4.b-AE4A6QBOAOk~6ACsAgACMGv8A~4-AIj--wD--yL-~~v2_AgIQBgU~7AEAAAD-AAMAAAD-~AAMAAAD-AAH~5-~6AYKBgL-AOPm-wBOAOkATgDp~7ArAIAAjBr-AP---wCI--8A--8i-w__~~v2_AgIQBgU~7AEAAAD-AAMAAAD-~AAP~5-AAH~5-Bgo~5ABgL-AOPm-wBOAOkATgDp~7ArAIAAjBr-AP---wCI--8A--8i-w__~~v2_AwMQ~BAD~4A-wAD~4A-wAD~4A-w~CAEAAAD-AAH~5-AAEAAAD-~AAYCAAP~5-AAP~5-AAP~5-AAYF~8A-wDj5v8ATgDpAE4A6Q~6AKwCAAIwa-wD---8AiP--AP--Iv8_~~v2_AwMQBgE~AAwAAAP8AAQAAAP8AAwAAAP8~CAD~4A-wAB~5-wAD~4A-w~CAP~5-AAH~5-AAP~5-AAYF~8A-wDj5v8ATgDpAE4A6Q~6AKwCAAIwa-wD---8AiP--AP--Iv8_~~v2_BAQQAAAGAQ~9AD~4A-w~4AP~5-AAMAAAD-~FAB~4A-wAB~4A-wAB~4A-wAB~4A-w~FAwAAAP8AAf~4-8AAwAAAP8AAQAAAP8~FAP~5-AAH~5-AAP~5-AAEAAAD-AAYF~AAD-AOPm-wBOAOkATgDp~7ArAIAAjBr-AP---wCI--8A--8i-w__~~v2_BAQQ~EAMAAAD-AAMAAAD-AAP~5-AAMAAAD-~IAEAAAD-AAEAAAD-AAEAAAD-~FAD~4A-wAB~5-wAD~4A-wAB~4A-w~CAYCAAP~5-AAH~5-AAP~5-AAEAAAD-AAYF~AAD-AOPm-wBOAOkATgDp~7ArAIAAjBr-AP---wCI--8A--8i-w__~~v2_BAQQ~8ABgE~7AMAAAD-AAP~5-AAMAAAD-~FAB~4A-w~7AQAAAP8~FAMAAAD-AAH~5-AAMAAAD-~IAP~5-AAH~5-AAP~5-AAEAAAD-AAYF~AAD-AOPm-wBOAOkATgDp~7ArAIAAjBr-AP---wCI--8A--8i-w__~~v2_BwcQBgE~KAB~4A-w~4AH~5-~5AwAAAP8~4AD~5-w~PAD~4A-wAB~4A-wAD~5-w~7Af~4-8~NAP~5-~7AB~4A-wAB~5-wAD~4A-w~PAD~4A-wAB~5-w~9AD~5-wAB~4A-w~PAB~4A-wAD~4A-wAB~5-wAD~5-w~XAD~5-w~4AEAAAD-AAH~5-AAMAAAD-~NAB~5-wAD~5-w~4AMAAAD-~5AQAAAP8~NAYF-wBSUlIAgYGBALOzswD---8AWVhrAGxrzAD---8AiP--AP--Iv8_"
        }, {
            '_name': 'arrow',
            'hash': -287231794,
            'puzzles': 22,
            'endPoint': [12, 12],
            'URL': window.NAME + "/#vs1_v4_AYABAg~4AIAAgQAAAgAAgAAAg~4AEFCQEFCQIA6OjoAM3L2AC1tcQ~6AICBiQCZkawAmQD-AIj--wD--yI_~~v4_AYABAg~4AIAAgQAAAgAAgAAAQABBhYIAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AYABAg~4AIAAgQAAAgAAgAAAQAABhYIAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AYABAg~4AIAAgQAAAgAAgAAAQABBhYQAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AYACAg~4AIEBAAEAAIAC~4AgEBAAEGFg4GFg4A6OjoAM3L2AC1tcQ~6AICBiQCZkawAmQD-AIj--wD--yI_~~v4_AYACAg~4AIEBAAEAAIAC~4AgEBAAEGFhYGFg4A6OjoAM3L2AC1tcQ~6AICBiQCZkawAmQD-AIj--wD--yI_~~v4_AYACAg~4AIEBAAEAAIAC~4AgABAAEGFgwGFhYA6OjoAM3L2AC1tcQ~6AICBiQCZkawAmQD-AIj--wD--yI_~~v4_AYADAw~4AQAAwQGBgIBBgAIABAAEAACAAADAAECAAIBBhYMBhYQBhYMAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AYABAQ~4AIAAgIAAAgAAgAAAQAABhYLAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AYACAg~4AIABAQAAAgAAgAAAQEABhYNAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AYADAw~4AQAAQUGBgAGAAAIABAAEAACAAAEAAEBAgEAAgEGFhIGFgwGFg8GFg0A6OjoAM3L2AC1tcQ~6AICBiQCZkawAmQD-AIj--wD--yI_~~v4_AaADAw~4AMCAgYEBQAACAAQAAIAAAUAAQECAgEAAgACAgMGFhQCAwIABhYPAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AaAEB~5AcAAQIHBwgIBwgCAAgBCAAgACAACAAgABAAIAACAAAHAAECAgIDAwIAAAEDAQICAwIABQkBAgAGFg8CAwIDAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AaAEB~5AcAAQIEBAgIBwgIAAYABQAgACAeAAABAAgeAAAQAAAFAAECAgMCAgECAwMABhYQAgAGFg8CAwDo6OgAzcvYALW1x~7AgIGJAJmRrACZAP8AiP--AP--Ig__~~v4_AaAEBB4AAAIACAgAHggeAgAAAwIDAwECAwYWDgYWDgYWFgDo6OgAzcvYALW1x~7AgIGJAJmRrACZAP8AiP--AP--Ig__~~v4_AaAEB~5AIACAgAAAgAAgAACg~4AEBAgIDAwMAAQMAAgEDAAIDBhYSBhYIBhYIBhYMBhYMBhYIBhYIBhYMBhYMBhYeAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AaAEB~5AQABQgICAgAAwAIABAAAgAQAAAFAAABAgMCAwADAQUJAQYWEQUJAwUJAgUJAQDo6OgAzcvYALW1x~7AgIGJAJmRrACZAP8AiP--AP--Ig__~~v4_AaAEB~5AIACAgAAAgAAgAABQEBAgIDAQIBAgEGFg8cDABHHAwAYwYWCgYWDADo6OgAzcvYALW1x~7AgIGJAJmRrACZAP8AiP--AP--Ig__~~v4_AaAEB~5AQAAgQICAc~4AIABAeAAACAAAEAAECAgMBAAIGFggcDAAhBhYMHAwDIwDo6OgAzcvYALW1x~7AgIGJAJmRrACZAP8AiP--AP--Ig__~~v4_AaAEB~5AoAAAEDAwQFBgcIBQcIAAQBAAQIBwAQACAAIAAgAAEAIAAgAAgAIAAgAAAFAAIDAwMCAwABAgIDAgMDAAYWDgIAAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8i~~v4_AaAGBg~4AYDBgYGBwwAAQIKDAcAEAAgAAEACAAQAB~4A8~4ABAQECAwMEBAUFBQUAAgMBBAUDAgMAAQECAwUGAQwGARsGARAGARUGARcGAQwGARIGARAGAQwGARYGAQgGAR4GAQ4GAR8GAQgA6OjoAN7e3gDExMQ~6AI.PjwDo6OgA~4-AIj--wD--yI_~~v4_AYADAw~4A4BAQICAgMDAwMEBAQFBQIEAQMFAAIEBgEDBQIEACAAIAAgACAAIAABACAAIAAIACAAIAAgACAAI~4AQIBBhYOAOjo6ADNy9gAtbXE~6ACAgYkAmZGsAJkA-wCI--8A--8iaHR0cHNcOlwvXC9jZG5cLmRpc2NvcmRhcHBcLmNvbVwvYXR0YWNobWVudHNcLzUxNTY3ODkxNDMxNjg2MTQ1MVwvOTI4ODA3MDUzNjAwODk1MDE2XC9pbWFnZV8zN1wucG5n"
        }, {
            '_name': 'dart',
            'hash': 30080363,
            'puzzles': 22,
            'endPoint': [14, 10],
            'URL': window.NAME + "/#vs1_v4_AYABAg~4AIAAgQAAAgAAgAAAQABBQkBAN-DwwC-q6sAqpeX~6ACBdHQA1kxMAP---wCI--8A--8i~~v4_AYABAg~4AIAAgQAAAgAAgAAAQABBwgIAN-DwwC-q6sAqpeX~6ACBdHQA1kxMAP---wCI--8A--8i~~v4_AYACAw~4AIABAYAAAgAAgAAAg~4AICCAcICADfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AYACAw~4AIABAYAAAgAAgAAAg~4AIDCAcICADfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AYACAw~4AIABAYAAAgAAgAAAQACBwgQAN-DwwC-q6sAqpeX~6ACBdHQA1kxMAP---wCI--8A--8i~~v4_AYACAw~4AIABAYAAAgAAgAAAgABAgAHCBAHCAwA38PDAL.rqwCql5c~6AIF0dADWTEwA~4-AIj--wD--yI_~~v4_AYACAg~4AIABAQAAAgAAgAAAQAABwgLAN-DwwC-q6sAqpeX~6ACBdHQA1kxMAP---wCI--8A--8i~~v4_AaADAw~4AMABgYGAAUACAACAB~4AMAAgICAAIDAwcDDAcADwDfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AaADAw~4AUAAAEGBgEGAAAGACAACAAgAAIe~5AgEBAAIDAAcACADfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AaADAw~4AMAAAYFBgAAEAAIAAIAAAMAAgIAAQIFCQIHCA4FCQEA38PDAL.rqwCql5c~6AIF0dADWTEwA~4-AIj--wD--yI_~~v4_AaAEB~5AMACAgIAAcACAACAB~4AQAAQMDAwEAAgMABwMLBwANBwMWAN-DwwC-q6sAqpeX~6ACBdHQA1kxMAP---wCI--8A--8i~~v4_AaAEB~5AYAAAECCAgBCAAFAAUAIAAIACAAEAACAC~4AQAAgIDAQEDAAcICwUJAgUJAwcIFQDfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AacFBQ~4AY~4AHCgoABQoAAAoAAwAQAAgAEAAIAAIAAAYAAQICAwQDAQEDAgMCAwcIEwIDAgACAAcICADfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AaMFBQ~4AUAAAgKCgAKAQAKAAEACB4AAAEACAAABAABAwQEAQMCBwgRBQkCBQkDBwgOAN-DwwC-q6sAqpeX~6ACBdHQA1kxMAP---wCI--8A--8i~~v4_AaAEB~5AIACAgAAAgAAgAABAEBAgMAAgEDBQkBHAwAYxwMADMHCA8A38PDAL.rqwCql5c~6AIF0dADWTEwA~4-AIj--wD--yI_~~v4_AaAEB~5AQAAQQIAQAICAAgACAACAACAAAIAAABAQIDAwMBAwADAwACAwIDAgADAwcICQIAAwACAwcICADfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AaAEBB4AAAMACAgIAAEeCB4CAB~4AMBAQEAAgMDCAUJAQcIEADfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AaAEB~5AIACAgAAAgAAgAACgAAAQEBAgIDAwMAAwACAwADAAEDAgACAwIDBwgJAgACAAIDAgMHCA4CAADfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AaAEB~5AQAAAcIBQgIAAAQAAgAEAACAAAIAAABAQICAwMBAwACAQMAAgcICwUJAgUJAgUJAgcIDQcICAUJAgcIFgDfw8MAv6urAKqXlw~6AgXR0ANZMTAD---8AiP--AP--Ig__~~v4_AaAEB~5AMABAgIAwAACAAQAAIAAAUAAwMDAwAAAQIDBwgTBwgWBwgWBwgWBwgWAN-DwwC-q6sAqpeX~6ACBdHQA1kxMAP---wCI--8A--8i~~v4_AaAGBg~4AYAAQYGBgwGCgAGDAYAAwAQAAEACAAEAAIAAA8~4ABAQECAgMDBAQFBQUAAgQBAwUABAMFAgQBAwUHARIHARMHARAHARoHARQHAQoFAQMHARAHAR4HAREFAQEFAQEFAQIHAR8HARgA3t7eAMfHxwCwsL~7AIeHhwDW1tYA~4-AIj--wD--yI_~~v4_AYADAw~4AsAAQECAwMEBAUFBgMCBAEABgEFAgQDAAMAIAAgACAAAQAIACAAIAAgACAAAgAAAQEBBwEIAN-DwwC-q6sAqpeX~6ACBdHQA1kxMAP---wCI--8A--8iaHR0cHNcOlwvXC9jZG5cLmRpc2NvcmRhcHBcLmNvbVwvYXR0YWNobWVudHNcLzUxNTY3ODkxNDMxNjg2MTQ1MVwvOTI5MzMyNzYzMTE3NjE3MjEyXC9pbWFnZV8zN1wucG5n"
        }, {
            '_name': 'chips',
            'hash': -775920561,
            'puzzles': 24,
            'endPoint': [5, 12],
            'URL': window.NAME + "/#vs1_v3_AQMBE~9AYBAAyAAAD-AAyAAAD-AAyAAAD-AAYF~8A-wA4ODgAqkZGAMV8f~7AyaamAODg4AD---8AiP--AP--Iv8_~~v3_AQMBE~9AYBAAyAAAD-~4ADIAAAP8ABgU~7AD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQMDE~9AYBAAyAAAD-~4ADIAAAP8~VAyAAAD-~4ADIAAAP8ABgU~7AD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQQEE~BABgEADIAAAP8~7AyAAAD-~NAMgAAA-w~cADIAAAP8~7AyAAAD-AAYF~AAD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQQEE~BABgEADIAAAP8~4AMgAAA-wAMgAAA-w~.ADIAAAP8~7AyAAAD-AAYF~AAD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQMDE~9AYB~7AMgAAA-w~HAMgAAA-w~CAyAAAD-AAyAAAD-AAyAAAD-AAYF~8A-wA4ODgAqkZGAMV8f~7AyaamAODg4AD---8AiP--AP--Iv8_~~v3_AQMDE~9AYBAAyAAAD-~4ADIAAAP8~HADIAAAP8~CAMgAAA-wAMgAAA-wAMgAAA-wAGBQ~7AP8AODg4AKpGRgDFfHw~6AMmmpgDg4OAA~4-AIj--wD--yL-~~v3_AQQDE~BABgE~PADIAAAP8ADIAAAP8ADIAAAP8ADIAAAP8~KAMgAAA-w~4AYF~AAD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQICE~6AGAQAMgAAA-wAMAAD--w~9AMgAAA-wAMAAD--wAGBQ~4AD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQMDE~9AYB~4ADIAAAP8~FAwAAP--~4ADAAA--8~FAyAAAD-~4ABgU~7AD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQQEE~BABgEADIAAAP8~7AyAAAD-~FAMAAD--wAMAAD--wAMAAD--wAMAAD--w~fAMgAAA-w~4AyAAAD-AAYF~AAD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQQEE~BABgEADIAAAP8~7AyAAAD-~FAMAAD--wAMAAD--wAMAAD--wAMAAD--w~EADIAAAP8~VAyAAAD-AAYF~AAD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQQEE~BABgE~4AMgAAA-wAMgAAA-wAMgAAA-w~EADAAA--8~lAwAAP--AAwAAP--AAwAAP--AAyAAAD-AAYF~AAD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQQEE~BABgEADIAAAP8~4AMgAAA-wAMgAAA-w~HAMAAD--w~iAwAAP--AAwAAP--AAwAAP--AAyAAAD-AAYF~AAD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQMCE~9AYCAAH~5-AAEAAAD-~FAMgAAA-w~4AyAAAD-AAYF~8A-wA4ODgAqkZGAMV8f~7AyaamAODg4AD---8AiP--AP--Iv8_~~v3_AQMDE~9AYCAAyAAAD-AAEAAAD-AAyAAAD-~FAB~4A-wAB~5-w~CAyAAAD-AAH~5-AAyAAAD-AAYF~8A-wA4ODgAqkZGAMV8f~7AyaamAODg4AD---8AiP--AP--Iv8_~~v3_AQQEE~BABgIAD~4AP8~7AwAAAD-~FAM~4A-w~4AH~5-AAGAAAD-~FABgAAA-wAB~5-w~KAwAAAD-~7AM~4A-wAGBQ~AA-wA4ODgAqkZGAMV8f~7AyaamAODg4AD---8AiP--AP--Iv8_~~v3_AQQEE~BABgIADP~4-8ADP~4-8~4AM~5-w~KAGAAAD-AAEAAAD-~FAB~4A-wABgAAA-w~KAz~5-~7AM~5-wAGBQ~AA-wA4ODgAqkZGAMV8f~7AyaamAODg4AD---8AiP--AP--Iv8_~~v3_AQMDE~9AYBAAEAAAD-~5Af~4-8~VAwAAAD-~4AD~4AP8ABgU~7AD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQMDE~9AYBAAEAAAD-~5Af~4-8~VAz~5-~4ADP~4-8ABgU~7AD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQMDE~9AYBAAEAAAD-~5Af~4-8~VAwAAAD-~7AGBQ~7AP8AODg4AKpGRgDFfHw~6AMmmpgDg4OAA~4-AIj--wD--yL-~~v3_AQMDE~9AYBAAEAAAD-~5Af~4-8~VAwAAAD-~5AQAAAP8ABgU~7AD-ADg4OACqRkYAxXx8~6ADJpqYA4ODgAP---wCI--8A--8i-w__~~v3_AQQEE~BABgIAAQAAAP8~7AwAAAD-~NAM~4A-w~HAB~5-w~KAwAAAD-AAwAAAD-~4AD~4AP8ABgU~AAP8AODg4AKpGRgDFfHw~6AMmmpgDg4OAA~4-AIj--wD--yL-~~v3_AQQEE~BABgIAAQAAAP8~7Az~5-~NAM~5-w~HAB~5-w~KAz~5-AAz~5-~4ADP~4-8ABgU~AAP8AODg4AKpGRgDFfHw~6AMmmpgDg4OAA~4-AIj--wD--yL-"
        }, {
            '_name': 'tent',
            'hash': 1078793617,
            'puzzles': 30,
            'endPoint': [9, 14],
            'URL': window.NAME + "/#vs1_v2_AgEQ~8ACP.lAP8ACP.lAP8ABgU~4AGAv8AY4hxAEt3UgBik24A~4-AD1RSQCiuaIA7d7AAIj--wD--yL-~~v2_AgEQ~8ACP.lAP8ACP.lAP8ABgUGCgAABgL-AGOIcQBLd1IAYpNuAP---wA9UUkAormiAO3ewACI--8A--8i-w__~~v2_AwEQ~BAI-6UA-w~4Aj-pQD-AAYF~7AGAv8AY4hxAEt3UgBik24A~4-AD1RSQCiuaIA7d7AAIj--wD--yL-~~v2_AwEQ~BAI-6UA-w~4Aj-pQD-AAYFBQ~6ABgL-AGOIcQBLd1IAYpNuAP---wA9UUkAormiAO3ewACI--8A--8i-w__~~v2_AwEQAAU~8AFAAj-pQD-~4ACP.lAP8ABgU~7AYC-wBjiHEAS3dSAGKTbgD---8APVFJAKK5ogDt3sAAiP--AP--Iv8_~~v2_AwEQ~BAI-6UA-wAABQAI-6UA-wUABgU~7AYC-wBjiHEAS3dSAGKTbgD---8APVFJAKK5ogDt3sAAiP--AP--Iv8_~~v2_AgIQ~8ACP.lAP8~CAI-6UA-w~4AYF~4ABgL-AGOIcQBLd1IAYpNuAP---wA9UUkAormiAO3ewACI--8A--8i-w__~~v2_AwIQ~GACP.lAP8~5ABQ~6ACP.lAP8~7AYF~7AGAv8AY4hxAEt3UgBik24A~4-AD1RSQCiuaIA7d7AAIj--wD--yL-~~v2_AwMQ~BAB~4A-w~4Aj-pQD-~CACP.lAP8AAQAAAP8AAf~4-8~CAB~5-w~4AEAAAD-AAYF~7AGAv8AY4hxAEt3UgBik24A~4-AD1RSQCiuaIA7d7AAIj--wD--yL-~~v2_AwEQ~BAI-6UA-wAI-6UA-wAI-6UA-wAGBQ~6ABgL-AFE9QgBxVlwAqo2VAP---wCWbncA-.XnAOxfawCI--8A--8i-w__~~v2_AgMQ~8ACP.lAP8~CAI-6UA-w~CAj-pQD-~4ABgU~4AGAv8AUT1CAHFWXACqjZUA~4-AJZudwD-5ecA7F9rAIj--wD--yL-~~v2_AgMQ~8ACP.lAP8ACP.lAP8~NAj-pQD-AAj-pQD-AAYF~4ABgL-AFE9QgBxVlwAqo2VAP---wCWbncA-.XnAOxfawCI--8A--8i-w__~~v2_AwMQ~GACP.lAP8~CAI-6UA-w~4Aj-pQD-~CACP.lAP8~4AI-6UA-wAGBQ~6ABgL-AFE9QgBxVlwAqo2VAP---wCWbncA-.XnAOxfawCI--8A--8i-w__~~v2_AwMQ~CABgoAAAj-pQD-~CACP.lAP8~BAYK~6Aj-pQD-~4ACP.lAP8ABgU~7AYC-wBRPUIAcVZcAKqNlQD---8Alm53AP-l5wDsX2sAiP--AP--Iv8_~~v2_AwMQ~BAI-6UA-wAI-6UA-w~HAC-6UA-wAI-6UA-w~HAC-6UA-wAGBQ~6ABgL-AFE9QgBxVlwAqo2VAP---wCWbncA-.XnAOxfawCI--8A--8i-w__~~v3_AQIDE~9Aj-pQD-AAj-pQD-~NAI-6UA-wAI-6UA-wAGBQ~4AYC-wA.PVEAVl5xAEmRqwD---8ARDdYANv3-wAkSrwAiP--AP--Iv8_~~v2_AgMQ~8ACP--gP8ACP--gP8~NAj-pQD-AAj-pQD-AAYF~4ABgL-AD49UQBWXnEASZGrAP---wBEN1gA2-f-ACRKvACI--8A--8i-w__~~v2_AgMQ~8ACP.lAP8ACP--gP8~NAj-pQD-AAj--4D-AAYF~4ABgL-AD49UQBWXnEASZGrAP---wBEN1gA2-f-ACRKvACI--8A--8i-w__~~v2_AwMQ~BAI--.A-w~4Aj-pQD-~FAI-6UA-wAI--.A-w~HAI--.A-wAGBQ~6ABgL-AD49UQBWXnEASZGrAP---wBEN1gA2-f-ACRKvACI--8A--8i-w__~~v2_AwMQ~BAI--.A-w~4Aj-pQD-~6AU~9ACP.lAP8ACP--gP8~5ABgo~BAj--4D-AAYF~7AGAv8APj1RAFZecQBJkasA~4-AEQ3WADb9-8AJEq8AIj--wD--yL-~~v3_AQMEE~HAj6jwT-~CACP--gP8AEf--AP8AEAADAAj6jwT-~FAR--8A-wAQAAM~FAj--4D-~4ACP--gP8ABgU~7AYC-wA.PVEAVl5xAEmRqwD---8ARDdYANv3-wAkSrwAiP--AP--Iv8_~~v2_AgIQ~MAj-pQD-AAj--4D-AAYF~4ABgL-ACw-MQAoNCkAF5cdAP---wAhVC4Am.6bAGje7gCI--8A--8i-w__~~v2_AgIQ~8ACMzMzP8~CAI-6UA-wAI--.A-wAGBQ~4AYC-wAsPzEAKDQpABeXHQD---8AIVQuAJvumwBo3u4AiP--AP--Iv8_~~v2_AwMQ~CABgo~8AFAAAF~6Aj-pQD-AAj--4D-AAjMzMz-AAAGCgUAAAU~DABgU~7AYC-wAsPzEAKDQpABeXHQD---8AIVQuAJvumwBo3u4AiP--AP--Iv8_~~v2_AwMQ~MAUAAAU~5ACP.lAP8GCgj--4D-BgoIzMzM-w~4AUAAAU~DABgU~7AYC-wAsPzEAKDQpABeXHQD---8AIVQuAJvumwBo3u4AiP--AP--Iv8_~~v2_AwMQ~MAUABgoF~6Aj-pQD-AAj--4D-BgoIzMzM-w~4AUAAAU~DABgUAAAYKAAAGAv8ALD8xACg0KQAXlx0A~4-ACFULgCb7psAaN7uAIj--wD--yL-~~v2_BQQXBgM~4AF~8ABgU~9ACP--gP8~5ABQ~HAI-6UA-w~KAU~PABQ~HAIzMzM-w~4AYFAAAF~AAYC-wAsPzEAKDQpABeXHQD---8AIVQuAJvumwBo3u4AiP--AP--Iv8_~~v4_AZADAw~4AIABgYGAAgAAgAAAwEBAQABAgkJCQ0JBQBQK00AbTBuAMJwvwD---8AeXJ4APG87ACZTM0AiP--AP--Ig__~~v4_AZAFBQ~4AIACgoKAAgAAgAACQAAAQICAwMDBAEDAQMEAQIEAAkNCQUJCQkFCQkJBQkJCQ0JDQBQK00AbTBuAMJwvwD---8AeXJ4APG87ACZTM0AiP--AP--Ig__~~v4_AYAFB~4AD~7AQEBAQECAgICAgMDAwMEBAQEBQUFBQYGBgYHBwcHCAgICAgJCQkJCQoKCgoBAwUHAAIEBggBAwQFBwACBggBAwUHAAIGCAEDBQcAAgYIAQMEBQcAAgQGCAEDBQcAIAAgACAAIAAgACAAIAAgACAAIAAgAAgAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAgAgACAAIAAgACAAIAAgACAAIAAgAC~4AECAgkDAGOIcQBLd1IAYpNuAP---wA9UUkAormiAO3ewACI--8A--8i"
        }, {
            '_name': 'bell',
            'hash': -1500708452,
            'puzzles': 20,
            'endPoint': [5, 8],
            'URL': window.NAME + "/#vs3_v8_FA4AAQEEAgUABgMHAAkECgULBgwHDQUQAxEGEggTCQAEAAsBEAISAxMEAREeAAAAEgAKAAoACgASABIACgASAA4ACgAKAAoADgAKAAoACgAKAAoANgAq~~RAEAgICBAQCBAMCAgIDAgICAgINCg~~RAwYGBgADBgMECAgGAQgICAYGAQAFBAQEBAUGBQgG~2CAgIBggCAAgAAAAECAAIAgAAAAQ~~7AIBAgAAAAkCAAIB~~5Ag~~7AwcCBQUFCgIFAgAFBQUABQUFBQUEBw~~MAHgQNAAICAgoAAgAFAgICBQICAgICBA4~~8AEDgUQBQUQEAUO~~8ABgEQBRAQAgIGBw~~5AHDhACEB~~9AGAAIFAgIFDgcOBgAABwUNBwAMIAYABSAHAAYFAAAFIAAAICAAACAgAAAgIAAAIAIAAAEgAAAgIAAgHgAAIAAgACAAIAAMAAwADAAMABEADAAWAAwAFgAWACAAHAAmAB8AHwAqAAwADAAWAE4~~RAICAgIDAgQCBAQGBggGBgkCAgQSAAAB~~9AQ~~BAQADAQECAAMBAgECAQE~~6AgI~2BAAABAAEAAgMBAQEAAAABAQMAAAABAQEAAgADAwIBAQECAAEBAwEiIiIiBCIBIgAAAgECAgIBIiIBAScnJycDJwALAAEDAgIDAwEAAAQBAQEBASIBAgEAAQECAwABAwMDAQIiIiIiJyIBIgACAQADAQIDIiIEAicnJycBJyITIiIDAQADAwMAACIEAQEBASIDJwELCwECAQMAAAQEAAQnAQEDAwMAAwEBAQUBIiIiAgEBAQICIgUiJwsTIgMAIiIDAwUnBAEBEycBJycAAQUBIiIiBAMAAQEDIgYnExMiJwEiAwAABgMBAgsiAwMnAgEGIiIiAycDASIDIgYnEwsiASIDJwMDAgIDARMDAycBJwEEAycBIiIiBiIiIicnJwETJwMBAQEDAQEBIiIDBSIDAwMDJwALJycBASIGAQMiIgMAIicnAwEGCyIBASIBAicDAgEBBCIDBicDAAEiAgMnBAMBBQMCJwADAicDAws~2iCwECAAIDAgMCAAIDAgM~2iEwECAAMTAgACAAID~~7AEAwI~2DBAQHAQIFAwMEBAIGB4~3CAgIDawN-fIN-ezMwgw9-V1SD~~6-7usv78-v76wsD.tv7S0QP~~6-p5.qqqaqqZ2dpp6qnp6q~~6-8~~5A0QAAAADR~~5AN~~7-356gIB9gH94eH54gHZ2gP~~6-Hx8gALcgIB8AuB8gHgC~~7-8-PUBA.UA-PT3wPEA7O2v~~6-4iIiIiI~~X-yIiIiIi~~6-8_"
        }, {
            '_name': 'drop',
            'hash': 2011487407,
            'puzzles': 15,
            'endPoint': [7, 8],
            'URL': window.NAME + "/#vs3_v8_DwUAAQECAgkDCgQMAw~~9AKABYACgAaABoACgAKAAoACgAKABYAFgAKAAoACg~~KAIFAgYGAgICAgIFBQICAg~~KAYCBgIBBgYGBggAAAgICAIGBgMBBgYGBggBAQgICAIIAAQCAAAGBgAFBQ~~5AMAAUE~~7AFBQAAAAUABQYGBQUFBQUAAAUFBQABAAYG~~7AGBgAAAAIBAgE~3CAgICAgECBAIAAgMFBAIABAEAAAUAAAMD~~7AQBQUFBQ~~6AEBAQEB~~7ABAQEBAQ~~7ACEBAQEAAAEBAAAAICAAcADAAHAAwABwAMABEAFgARACAABwAHABYADAA.~~LAQIBAgECAwQDBgEBBAIMAQABAgEB~~6AMDAgAAAAIBAgI~2BAQEAAgMAIwAjACMAAgECASMjAgABEwATARMCAQIBAhMTAgMBASMBIwMjAQEBAgEBACMBExMTAQABAwETAQECASMCIwICBAIjIyMTARMAAyMCExMTAiMDAiMTAgEBAyMTIwETAgITAhMDAgMDIwMBIwMjEyMjEwETARMTAgIEIwEDIwATIxMBAxMCAiMEIwMTIxMABBMCAQMCIwMTAQECIyMTEwICIyMTEwED~2IxMC~2IxMD~2IxMB~2IxMEIxMBIxME~~7ADBgMEBAEBAwQDgICAgICS997-TsGe---ZUv8AAAD-dmYT--.vJP--lQD---8A-wD---8_"
        }, {
            '_name': 'xvmino',
            'hash': -1287353374,
            'puzzles': 9,
            'endPoint': [9, 10],
            'URL': window.NAME + "/#vs1_v4_AYADAg~4AwAAAEBAQIEBQUFBgYBAwACBAQAAAIEAQMAIAAgACAAIAAgAAgAAQAgACAAIAAgAC~4AIBAQABGh0AARIMABEADjo6ABInKwASJysA~4-AC9QTABEz3oArurFAIj--wD--yI_~~v4_AYADAwAAAB~5ABAQEBAgQFBQUFBgYGAQMFAAIEBgYAAAIEBgEDBQAgACAAIAAgACAAIAAgAAgAAgAgACAAIAAgACAAIAAgAAACAQEAAhodAAESDAAjAA46OgASJysAEicrAP---wAvUEwARM96AK7qxQCI--8A--8i~~v4_AYAEAg~4AwAAAEBAQIGBwcHCAgBAwACBAQAAAIEAQMAIAAgACAAIAAgAAgAAgAgACAAIAAgAC~4AIBAgEBEgwBERodAAEADjo6ABInKwASJysA~4-AC9QTABEz3oArurFAIj--wD--yI_~~v4_AYAEAwAAAB~5ABAQEBAgYHBwcHCAgIAQMFAAIEBgYAAAIEBgEDBQAgACAAIAAgACAAIAAgAAgAAgAgACAAIAAgACAAIAAgAAACAQIAAhIMADMaHQADAA46OgASJysAEicrAP---wAvUEwARM96AK7qxQCI--8A--8i~~v4_AYAEAwAAAB~5ABAQEBAgYHBwcHCAgIAQMFAAIEBgYAAAIEBgEDBQAgACAAIAAgACAAIAAgAAgAAgAgACAAIAAgACAAIAAgAAACAQICABIMADMfHQADAA46OgASJysAEicrAP---wAvUEwARM96AK7qxQCI--8A--8i~~v4_AYAEAwAAAB~5ABAQEBAgYHBwcHCAgIAQMFAAIEBgYAAAIEBgEDBQAgACAAIAAgACAAIAAgAAgAAgAgACAAIAAgACAAIAAgAAACAQIBAhwMAEcaHQADAA46OgASJysAEicrAP---wAvUEwARM96AK7qxQCI--8A--8i~~v4_AaAFAwAAABE~4ABAQEBAgUICQkJCQoKCgEDBQACBAYGAgAAAgQGAQMFACAAIAAgACAAIAAgACAACAAQAAIAIAAgACAAIAAgACAAI~4AgEDAgIcDARjGh0AIwAOOjoAEicrABInKwD---8AL1BMAETPegCu6sUAiP--AP--Ig__~~v4_AaAGB~4ABQ~6AQEBAQECCgsLCwsLDAwMDAEDBQcAAgQGCAgAAAIEBggBAwUHACAAIAAgACAAIAAgACAAIAAgAAgAAgAgACAAIAAgACAAIAAgACAAI~4AwEBBAADARIMARMSDAIjGh0AAwAOOjoAEicrABInKwD---8AL1BMAETPegCu6sUAiP--AP--Ig__~~v4_AaAKCgAAAI4~EAQEBAQEBAQEBAQECAgICAgICAgICAwMDAwMDAwMDAwMEBAQEBAUFBQUGBgYGBgcHBwcICAgICAkJCQkKCgoKCwsLCwwMDAwMDQ0NDQ4ODg4ODw8PDxAQEBAQERERERERERERERESEhISEhISEhISExMTExMTExMTExMUFBQUFBQUFBQUAQMFBwkLDQ8REwACBAYICgwOEBIUAQMFBwkLDQ8REwACBAYICgwOEBIUAQMQERMAAhIUAQMKERMAAhIUAQMKERMAAhIUAQMREwACEhQBAwoREwACEhQBAwoREwACEhQBAwQREwACBAYICgwOEBIUAQMFBwkLDQ8REwACBAYICgwOEBIUAQMFBwkLDQ8REwAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAACAAgACAAIAAgACAAIAAgACAeAAAgACAAIAAgACAAIAAgACAeAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgHgAAIAAgACAAIAAgACAAIAAgHgAAIAAgACAAIAAgACAAIAAgAAEAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAAGAgMEBQYHBwMHAgYCHAwAMhodADIcDABDHAwAMRodABMSDAAHAAsoKAAMGh0AECAjAP---wAoQ0AAPbhsALTpyACI--8A--8i"
        }, {
            '_name': 'antimino',
            'hash': -383332741,
            'puzzles': 19,
            'endPoint': [11, 8],
            'URL': window.NAME + "/#vs1_v2_AgEQ~6AYCABP-AAD-~4AEQ~4AYF~5AP8A~4-APT09ACLi4s~6ALOzswAZTJoA7MsXAP--~4A~4-~~v2_AwEQ~8ABgI~4AT-wAA-wAAAREGCgAABgU~7AD-AP---wD09PQAi4uL~6ACzs7MAGUyaAOzLFwD--wAAAP---w__~~v2_AwMQ~8ABgIAE-8AAP8~4AD~RAGCgAGCg~AAE-8AAP8~4ADAAYF~8A-wD---8A9PT0AIuLiw~6As7OzABlMmgDsyxcA--8AAAD---8_~~v2_AwMQ~8ABgI~KAT-wAA-w~4AM~4AT-wAA-wAAABE~KAGBQ~5AFAAD-AP---wD09PQAi4uL~6ACzs7MAGUyaAOzLFwD--wAAAP---w__~~v2_BQUQ~8ABgE~4AGAg~UAE-8AAP8~4Az~9ABP-AAD-~4AEw~MAE-8AAP8~4AH~qAE-8AAP8~4AR~CABgU~DA-wD---8A9PT0AIuLiw~6As7OzABlMmgDsyxcA--8AAAD---8_~~v2_BQIQ~7AGF~6AGAg~LAGF~8ABP-AAD-~4AEQ~6AE-8AAP8AEAAR~4ABgU~DA-wD---8A9PT0AIuLiw~6As7OzABlMmgDsyxcA--8AAAD---8_~~v2_AwMQ~8ABgI~MABP-AAD-ABAARwAR--8A-wAQAEc~5ABQ~EABgU~7AD-AP---wD09PQAi4uL~6ACzs7MAGUyaAOzLFwD--wAAAP---w__~~v2_AwMQ~8ABgI~MABP-AAD-ABAARwAR--8A-wAQAEc~BAU~9ABgU~7AD-AP---wD09PQAi4uL~6ACzs7MAGUyaAOzLFwD--wAAAP---w__~~v2_AwMQ~8ABgI~KAR--8A-wAQAAcAEgAA--8AEAAHABP-AAD-ABAABw~KAYF~8A-wD---8A9PT0AIuLiw~6As7OzABlMmgDsyxcA--8AAAD---8_~~v2_BAMQ~8ABgE~4AC-wAA-w~RABP-AAD-ABAAEw~HAT-wAA-wAQABM~7AL-AAD-AAYF~8ABgoA-wD---8A9PT0AIuLiw~6As7OzABlMmgDsyxcA--8AAAD---8_~~v2_BAQQ~BAGAgACgP---w~MAE-8AAP8AEAEh~qAE4D---8AEAERAAL-AAD-AAYF~AAD-AP---wD09PQAi4uL~6ACzs7MAGUyaAOzLFwD--wAAAP---w__~~v2_BAQQ~4ABgo~5ABgI~4AT-wAA-wAQARE~5ABgo~IABP-AAD-ABABIQ~JABP-AAD-~4AIQ~8AYK~MAYF~AAD-AP---wD09PQAi4uL~6ACzs7MAGUyaAOzLFwD--wAAAP---w__~~v2_BQMQ~EAYCABP--wD-ABAAJw~9AR--8A-wAQJw~LAR-wAA-wAQAyI~4AT-wAA-wAQMiAGCg~WAYF~DAP8A~4-APT09ACLi4s~6ALOzswAZTJoA7MsXAP--~4A~4-~~v2_BQMQ~EAYCABP--wD-ABAAJw~9AR--8A-wAQJw~LAR-wAA-wAQAyI~4AT-wAA-wAQMi~EABgo~JAYF~DAP8A~4-APT09ACLi4s~6ALOzswAZTJoA7MsXAP--~4A~4-~~v2_BQMQ~EAYCABP-AAD-ABAyI~AAT-wAA-wAQACc~KAR--8A-wAQAyI~4AR--8A-wAQACc~RAYK~6AYF~DAP8A~4-APT09ACLi4s~6ALOzswAZTJoA7MsXAP--~4A~4-~~v2_BQMQ~EAYCABP-AAD-ABAyI~AAT-wAA-wAQACc~KAR--8A-wAQAxE~4AR--8A-wAQACc~GAFAAAGCg~DAGBQ~CAD-AP---wD09PQAi4uL~6ACzs7MAGUyaAOzLFwD--wAAAP---w__~~v2_BAQQBQAABQAABQAABQAABgIAE-8AAP8AEAAnABP-AAD-ABAAJwAT-wAA-wAQACcAE-8AAP8AEAAnAAUAAAUAAAUAAAUAAAUAAAL-AAD-ABP-AAD-ABAAJwAT-wAA-wAQACcAE-8AAP8AEAAnAAUAAAUAAAUAAAUAAAUAABP-AAD-ABAAJwAT-wAA-wAQACcAE-8AAP8AEAAnABP-AAD-ABAAJwAFAAAFAAAFAAAFAAAFAAAT-wAA-wAQACcAE-8AAP8AEAAnABP-AAD-ABAAJwAT-wAA-wAQACcABgUABQAABQAABQAABQD-AP---wD09PQAi4uL~6ACzs7MAGUyaAOzLFwD--wAAAP---w__~~v2_BQUQ~EAYC~XABP-AAD-ABAADw~.AEf--AP8AEE92~lAGBf8A~4-APT09ACLi4s~6ALOzswAZTJoA7MsXAP--~4A~4-~~v2_BgYQBgM~sABH--wD-~4AJwAT~4Ag~4ACc~cABH--wD-ABADEwAT~4AgAAQAxM~PAEf--AP8AAAJ0ABMAAAC~4ACd~yABH--wD-~4AYwAT~4Ag~4AGM~CAGBQ~FAP8~6ACkpKQCLi4sA~4-ALOzswAZTJoA7MsXAP--~4A~4-"
        }, {
            '_name': 'incomplete pentagon',
            'hash': 0,
            'puzzles': -1,
            'endPoint': [10, 2],
            'URL': "https://seren-35.github.io/witness-playground/"
        }, {
            '_name': 'swirl',
            'hash': 645941220,
            'puzzles': 13,
            'endPoint': [2, 12],
            'URL': window.NAME + "/#vs2_v5_AA0APAA8AEEARABOAEoAXwBfAHUAdAB3AKkArw~4EBAQG~2AgIC~2goKCAAQEBAwMDBAUEBQUIAgEBBAMDAwQEBAUFCAI~~HA~3TExMTEw4TE~3tLS0tLOEt~3HR0dHRzhH~~HA~3KioqKioiq~3ioqKioqIq~4oqKiKq~~HAC~3oqKioqJS~4oqKiU~4qKiolKg~~HA~3ZGRkZGRrZF~3paWlpaa1o~38PDw8PGs8~~HA~4GRkZmR~3aWlpaWmZa~3PDw8PDxmP~~HAC~35ubm5uf.5~3gICAgID-gO~37u7u7u-.4~~HA~3ioqKior-ii~3srKysr-yv~3j4.Pj4--j~~HA~4IiIiIj~~Y-w~~GAD~~Y-y~4IiIiI~~qACAgIEBAMCBwUCAwUG~~IAICAgMCBQgCBAoFCAECAggEBAYIBQQKCggCAAAABgYGAAUEAAoIAgAAAAYGAAAFCAAGEAMICAgEAwAICAQIAAgE~~5AQMAAAo~~5ABAICAgAACAIABAEICAI~~9ABggAHhABAAAACAgQAAIEAAAIAwEBAgAAAAgEAA0AAAIAAAAQEAIABgMAAQM~~BAY~~6ACAgABAQAAEAAQAAAQgWFgIAAAMBAAAACwAAAQAgAgIBAgEIAQAIIBYAAAECAAAC~~5AQAAAQMIBAIBBCAgAQMAAwAAAgEAABYBAQEAEAIDAQIgAAIBAgIAAAQCAAAgASABEAAEAwAgFgAWAwAKBAMTAAEBAQAQAAQDAAECIAIAAAAEAAAgFgEIAAEEAAAWAAMAAQIBAQEBICABAgQCAQAgFhYAAgQAAQEWAQEAAgADAiAAIAQDAgQCFiAWAgMEAAMAFgECAwAABGgBIAIAAAIEdBYCAgIEBHQAAAMDAwVwIAECBAQFcxYCACAgBVwAAwEWFgY6ICADAQEGXBYWAAMcBy8BAAIWDAdcICADIAAALxYWIBYXA2MAARYBIAZkICABIBYCbhYWBRYABVwAAAkBHAcuICACAwwBZBYWIBYAA2kBARYgEwZzARYgAGMgARYCbxYgAQdyABYcAGQFAQwEYQkgAAZwAhYHAnAgASAFXBYDFgUuABYBB2MgIBwcbxYWDAxtAQEAAVwgIBMxLxYWICBhAQEWFnQgAwABdBYWIBxhACAWDGMFFgEAaAkBHCdtAwwcZQAMbgcAdA9zIFwWLwA1IDEWNQA2IDcWOAA5IDEWNAEzIDEWNgE4HDYMMQI0MjUgMRZcAS8cOQwzADBxMCA3FjkAOCAxFjcBOSA4FjAAOCAzFjcBORwwDDgAXDMvIGkWbQBhHGcMZQBfcTQyXC5wbmc_"
        }, {
            '_name': 'crystal',
            'hash': 1479665056,
            'puzzles': 13,
            'endPoint': [10, 4],
            'URL': window.NAME + "/#vs2_v5_AA0ARABEAE4AWABYAEYAYwBMAEwAXABEAEQAXw~4EBAQGDg4ODhYCAgICAh4CAAQMDBQU~2DBQMFBQICAgQF~2AwUDBQU~~0A~~MAE~CJCQkJCQg~~GA~DBwcH~~IA~~q-~~HA~DCQkJ~~HAC~C-v7.-v78~~HA~D6Ojo~~HA~4IiIiIj~~Y-w~~GAD~~Y-y~4IiIiI~~qAEBAQEBAIIBgYFBAQC~~MAQABgIBAQAAAAoCBgYGCgYDAgIBBgoKAgYGCgoAAwQECAYK~~6AgAAAQFBQoABQAEBAQACggKBgYHBgoI~~6AQACgYGCgAAAAQEBAgGAgoEBAoGAwI~~8AKBQUF~~5AQEBCAgACQEBAAMQ~~9AwgCAgAAAAgICAgBCAAKAAAQCAg~~8ACCQ~~8AEBAQECAgAICAgIAgE~~7AED~~7ABCAgICAIABxAQEAIQAg~~7AQ~~8AI~~6ABsIEBAQAAAEAQEDBQUD~~6AEBBAABAAAABBAQEAIBAgABAQEBARs~~6AQIDGxsCAgIDEBAQABsb~2AAMDB~~5AUDAwQEBAEEBBsQAgEABQUDAAIDAw~~5AEGwEEAhAAAAEAAwMCAAEBAQMEAQACAQEDGxsCAQABAQADAxsbEBsbBAIE~2AwMAGxsEAhABAwMDAxsbAAICBAMDABsbBAIEAwMbGwECBAMDAhsbBAQEAwMbGwQBAgMDBBsbBAIBAwMbGwEEBQMDAxsbBAIbAwMDAQUEGxsbAwMDAgQEGxsDAwICGwMC"
        }, {
            '_name': 'line',
            'hash': -413317852,
            'puzzles': 13,
            'endPoint': [12, 16],
            'URL': window.NAME + "/#vs3_v8_DQcAAQECAgQDBQIJAAsDDAQAAAACCwweFQAAABoAGgAOABYAGgASABIADgAaAA4ALgAOALI~~HABgYDBQYEBAMGAwsDL~~8Ag~~9ACAAEBAAIEAwIEAAYAAwEEAgECBAQDBgEGAAMBBAMCAgQEBAYCBAAEAgIEAwEEBAQFAwABBgIABAYCAAAEAAQDAQYBAAIBAwMABAAFHgEDAgUCBAQEBQQFBQUCAgAAAgQAAAAEAAUeAgQCMAQBIAUwADAGAgID~~AAIABgAEAAECBQABAgIDAgQwB~~AAFBAUwEBAwMAUGBQAAHAAAHioFBTAFAAUFAAAGBQ~~8AYwMDAQMAAG~~7ACBjAwAjACBggAAAAqAQgwAhAAAwg~~7AgCMAEwBQkACiAKAAogCwAMIAwADCAMAA4CDgAOIA4ADiAQABAwEQARIBEAEiASAQIDBAACBA~2ECAw~2ACBAECAwQAAQIDBAABAgMAAQIDBAEEAAIEAAMAMBsAADAVBQAwADAAMAAwGwAAMAAwGwAAMAAwADAAMB4AHgAeAAAwGwAAMB4AADAAMBsAADAAMB4AADAbAAAwHgAAMBsAADAeAAAwHgAAMAAwADAeAgAwAAgACAAHAAIABwAMAAcADAAHABIACgAMAAI~~IAQEBAAECAQIBBAIC~2AAEAAQAB~~5AQA~2BAQEBAgISEgcIAQYABwEAAQwMCBQBFgEIAgIAAAAIAiAIBg8BCgYBARYWAAAWAQsCChogIQEABhYLDhYAAwkeDgkOCQ4JAAIHAQgB~~5AwECAwkDAQICAoCAgICAz6rf-7Shv-.knKr-AAAA-3x6gP8gICD-Pj1A-4j~~6-yL-AGlodHRwc1w6XC9cL2NkblwuZGlzY29yZGFwcFwuY29tXC9hdHRhY2htZW50c1wvNTE1Njc4ODIxNDA4NTcxMzkyXC85MzMyMjU1MTM4MTg5NDM1NjhcL05ld19Qcm9qZWN0XzE3XC5wbmc_"
        }, {
            '_name': 'editor',
            'hash': 0,
            'puzzles': -1,
            'endPoint': [8, 0],
            'URL': window.NAME + "/editor.html"
        }
    ]

    String.prototype.hashCode = function () {
        var hash = 0, i, chr;
        if (this.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    function reloadPanel() {
        let svg = document.getElementById('puzzle')
        while (svg.firstChild) svg.removeChild(svg.firstChild)
        draw(window.puzzle)
        window.clearAnimations();
    }

    window.onload = function () {
        let toLoad = (new URL(window.location.href).hash);
        if (toLoad.startsWith('#vs')) window.location.replace(window.NAME + '/play.html' + toLoad);
        else if (toLoad.startsWith('#v')) window.location.replace(window.NAME + '/editor.html' + toLoad);
        else {
            window.puzzle = deserializePuzzle("v8_CAiAAQ~EAZ~KAGQAAABk~FADLgD-DEQI-xxjF~7-h2ZK---IlP~6-iP~6-Iv8AAACF~BABAQEBAQEBAQECAgICAgICAgICAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUGBgYGBgYGBgYGBwcHBwcHCAgJCQkJCQkJCgoKCgoKCwsLCwsLCwsMDAwMDAwMDAwMDQ0NDQ0NDQ4ODg4ODg4ODg4PDw8PDw8PDw8QEBAQEBAQEAEDBQcJCw0PAAIEBggKDA4QAQMFBgcKCwwNDwACBAgKDA4QAQMFBwkKDQ4QAAIECAwOAQIDBAcJCgsNDwAGCAoMDgAQAgQGCAoMDgIDBAcLDwACBAYICgwOAQMFCAkMDQ4PEAACBAgMDhABAwUGBwkKCw0PAAIEBggKDA4QAQMFBwkLDQ8AIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAEAIAADACAAAwAgACAAIAAgACAAAQAgKQEAIAAgACAAIAAgACAAIBwBACAAAgADACAAIAAgAAQABAAgACAABAAgAAMAIAAgFgQAIAAgACAAIAAgAAEAIAABACAAAQAFACAAIAAEACAABAAgAAEAAwAgAAIAIAAgACAAIAAgACAAIAABACAABAAgACAAIAAgAAIAIAACACAAAwAwAAIAIAAgACAAIAAgACAAIAAgACAAIAAEACAAIAACACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAFgAAAQEBAgICAgMDBAQEBAUFBQYGBgcEBgIEBwIDBQcEBgACBAcCBAUDBAYFDBAEIBYAFwMkAAIACgAiEwENGwUJAyMcAQQDDgkQDB8dAEcJDRsXAx4GAGMIFAMPDAAZDwMGFhAHCB8AaHR0cHNcOlwvXC9jZG5cLmRpc2NvcmRhcHBcLmNvbVwvYXR0YWNobWVudHNcLzUxNTY3ODgyMTQwODU3MTM5MlwvOTU0ODc2ODgyMjU4NjMyNzU0XC9pbWFnZV84MFwucG5n");
            reloadPanel();
        }
        for (let o of PROGRESS) if (checkProgress(o.hash) === o.puzzles - 1) {
            const params = {
                'type': 'flower',
                'width': 58,
                'height': 58,
                'x': o.endPoint[0] * 41 + 23,
                'y': o.endPoint[1] * 41 + 23,
                'class': 'flower_' + o.endPoint[0] + '_' + o.endPoint[1],
                'color': HSVtoRGB(Math.random(), 0.2, 1)
            }
            drawSymbolWithSvg(document.getElementById('puzzle'), params)
        }
    }

    window.reloadSymbolTheme = function () {
        draw(window.puzzle)
    }

    window.onSolvedPuzzle = function () {
        let temp = PROGRESS.find(x => x.endPoint[0] == puzzle.endPoint.x && x.endPoint[1] == puzzle.endPoint.y);
        if (temp) window.location.href = temp.URL;
    }

    window.checkProgress = function (hash) {
        let progress = localStorage.getItem(hash);
        if (localStorage.getItem('puzzleProgress_' + hash)) {
            let temp = '';
            for (let i = 0; i < Number(localStorage.getItem('puzzleProgress_' + hash)); i++) {
                localStorage.setItem(hash + '_' + i, localStorage.getItem('puzzleProgress_' + hash + '_' + i))
                localStorage.removeItem('puzzleProgress_' + hash + '_' + i)
                temp += String.fromCharCode(i);
            }
            localStorage.removeItem('puzzleProgress_' + hash);
            if (temp?.length) temp = '\0';
            localStorage.setItem(hash, temp);
            progress = temp;
        }
        if (!progress) return -1;
        return progress.charCodeAt(progress.length - 1);
    }

    let sr = 2; hr = 4;
    window.toggleReset = function (hard = false) {
        let button = document.getElementById(hard ? 'hardReset' : 'softReset');
        if (hard) {
            hr--;
            button.innerHTML = 'This will delete EVERYTHING. Continue by pressing ' + hr + ' times.'
            if (!hr) {
                resetProgress(true);
                button.innerHTML = 'Reset Progress';
                hr = 4;
            }
        } else {
            sr--;
            button.innerHTML = 'This will delete non-main page puzzle\'s progress. Continue?'
            if (!sr) {
                resetProgress();
                button.innerHTML = 'Clear Cache';
                sr = 2;
            }
        }
    }

    const dontReset = ['puzzle', 'merge', 'sensitivity', 'symbolTheme', 'volume', 'expandSettings', ...PROGRESS.map(x => x.hash.toString())];
    window.resetProgress = function (hard = false) {
        for (let k in localStorage) {
            if (!hard && dontReset.includes(k.split('_')[0])) continue;
            localStorage.removeItem(k);
        }
    }

    function HSVtoRGB(h, s, v) {
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return `#${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}${(Math.round(Math.random() * 128) + 127).toString(16).padStart(2, '0')}`;
    }

});
