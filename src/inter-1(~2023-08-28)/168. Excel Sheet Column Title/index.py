def convertToTitle(columnNumber):
    # Create an empty string for storing the characters...
    output = ""
    # Run a while loop while columnNumber is positive...
    while columnNumber > 0:
        # Subtract 1 from columnNumber and get current character by doing modulo of columnNumber by 26...
        output = chr(ord("A") + (columnNumber - 1) % 26) + output
        # Divide columnNumber by 26...
        columnNumber = (columnNumber - 1) // 26
    # Return the output string.
    return output


convertToTitle(703)
