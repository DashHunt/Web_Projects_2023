class Strings():
    @staticmethod
    def NormalizePathStrings(string: str):
        return string.replace('\\', '/').replace(',', '').replace("'", "").replace("(", '').replace(")", "")