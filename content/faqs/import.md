---
title: "Importing data from other period tracking apps"
draft: false
key: "import"
headless: true
weight: 200
---

You can import data that you've exported from other period tracking apps provided it's in the supported format. Your file must be in the CSV format with the columns **YYYY-MM-DD,YYYY-MM-DD** where the 1st value is the start date and the 2nd value is the end date.

To import data in the supported format, navigate to the settings by tapping the cog in the top right, then tapping Import. From there, you will need to pick the file from your device. You may need to email it to yourself and download it to your Android device before attempting to import.

If your data looks like this:

| Start Date       | End Date         |
| ---------------- | ---------------- |
| January 1, 2022  | January 4, 2022  |
| February 1, 2022 | February 5, 2022 |

The CSV should look like this:

```csv
2022-01-01,2022-01-04
2022-02-01,2022-02-05
```

If your current period tracker exports data in a different format, I may be able to add support for it. Depending on the format of the data, it may be easy to support importing a different format. There are a couple of ways you can share your data:

1. You can get in touch on [Discord](https://discord.gg/UDBr9v6mjA) with some sample data. You are welcome and encouraged to **only provide a subset of the data** and **modify the data** you do provide to prevent having your real period data linked to you as sharing data over Discord is not private as [Discord scans media](https://medium.com/cbblog/understanding-discord-community-servers-ed30b61acdbe#:~:text=Scan%20media%20content%20from%20all%20members.) from all members in the server. 
2. You can encrypt the file with [PGP](https://www.openpgp.org/). You can either [view](https://techygrrrl.stream/api/pgp) or [download](https://techygrrrl.stream/techygrrrl-pgp.asc) my public key. On macOS you can use [GPGTools](https://gpgtools.org/) to sign content with my public key and send it to me over any medium.

Please note that I will likely be building the feature on stream and may need to refer to the data, so keep that in mind when sharing. While your data would remain anonymous and not be linked to you on stream, the data could become visible on stream.
