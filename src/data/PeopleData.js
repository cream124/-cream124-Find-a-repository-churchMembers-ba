
function getRootData() {
  const data = [
    {
      "name": "Abner",
        "lastName": "Mamani",
        "motherLastName": "Loka",
        "birthDate": "1974-07-11T00:00:00Z",
        "gender": "MASCULINO",
        "civilStatus": "CASADO",
        "ci": "5241442",
        "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUSEBIVFRAQFRUVFRAQEBUPEA8VFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS0tLS0tLS0rLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rKy0tLS0tLS0tLS0tLS0tLf/AABEIANAA8wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYABwj/xABCEAACAQIDBQYDBgMGBQUAAAABAgADEQQhMQUSQVFxBiIyYYGRE6GxByMzQsHwFFLRFRY0YqLhU3KCkvEkQ3Ozwv/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAoEQACAgEEAQQCAgMAAAAAAAAAAQIRAwQSITETFEFRYTKBInEFUpH/2gAMAwEAAhEDEQA/APPgWPlHFoczHlWOqs1WcpRG0pR9UhKsdRILHUQFSOqkcVIRqoNSIB6SEWnHVpyK+1KY0zPlnGjj6jeBD1OUNMm6KLIJEZ1GplcKdZvE4XpmYabNH52ZupsPlJtFeT4H6m0Ka8Yz/aTHwIx9LSVRwdNdFHteSkENC72VoXENyUeZuY6mymPjqMfJchJ1WqqKWY2A/dh5zMbX22zXUHdU/lU2b1Op9IspqJZjxPIXn8NhqfiZb/5mufaSsNjaF91XW/KxH6Tz6nXF+Nzz4+sn0FJ8ORXPdPADiOY+kpeVmtaWHyeiLTJzGY8jeEaR5TE4XapQhid1/wCdTdlz9mXyM2+z9srWWxA3wBcr4WvxHEdI0clleTT7VaYgWGFjhWEqS2jLYKrH6SxFWP01koNj9FZKVY1SWSVWAdMFVhVF7phqsKovdMUe+DrQ1nOhtlOoqbZxkhJSDnXirFFHO8NCOR1okd3IslEtniSrFNVRqRKJ8YTzPraNmufIfvzhoXkvTj14AnpGqm0z5Dqbn5SkLk6kmKRkPWGg8k+rtEn8xPTIfONLjBfNb9STIk4CEFFvR2oo/LbpJtLaSHj7zOhYQEgjiauliFOhEkI8yNAkN7/SFTxTjRjCLybFWjqmZSltWoPOTKW3DxElAth9osWd4UwbBRvH/mOnsPrKDC7Hes53eHHMx7amI365YZBt307gE2/Z7AqlJcsyOM52fI4tnd0uNOCX0UFDsSX1fvW13b+8mUOwOI3riqvXO/LSbvAIsuKCaZTKssjY8UF7Hl+0/s5rAA0nDMM7eD2lJUpVqDhXBVxceRPA9b+894BW1iPaZftrstHoM4A36Y3lPSPHLK+RZY40QMBXFRA443B8ipKn5iSwspOxwP8AD5m9nb6Kf1mgVZ1YcxTPPZf4zaEVY/SWcix6msNCpj9JJJVIlFJKVIhYmNpTh16fcPSPJTh4hPu26QMuXQ21OKlOSWSciQoR9jC0o4KUeVIYSQFDPw50k7k6Sw0fLEUCcItpYVHWhkZD1iAQyMh6yAsG0UCKBFkBYgEWKBCtCK2LQGfv9IIEdoDve/0ggSC2CBC3YoEcpKN4A6XF+l84eidugEob1ampv3ioPPX/AGmzxWLqowpYenvNlmTZEHmZFxeFVq+HYfiZb/K24SPXKWOLwTv4TbnbMn0OonGyZFN2enw4XjjtsXCbYxlIg1aFNqZ/NSfeI6i5m2wePV6fxLaLchZ5+2HdFqor1HesykXaoVoKL3UBzY8M9f02HYiiyqynlofOK2r4LKdchv2spI24cPXLc0oF1v5mNYvaKYmnUpAMlQo1ldbHIXBH9JX7U2RiGxasHdVFTeP3jbr08u4ALW0+ec0mFwzZ/EO9md3+ZVNxuk2F8jrJxQKZgezG0USiFc2Ym/yA/SaKjjUOjD3me27sRKWCo1V/FLMHOeYuy25ZECZtKrDQmdjA4zgqPL61Tx5nfvz+j1GnUHOSqRE8upbUqroxk3Cdoq28BeWuBmWZ+6PVaC5SWiTM7HxlR0Bl5TVyNZU4mqOT6LKmgnYy3w2z4QcNgHYamdjtmMKbG/CV8X2aVu29BVayjjAXErI+Kw1tYVCkLSxRVFEskr6HxixO/ivKItMQwslIG+Qn8S3KLD3Z0HAbl8ny8BCnAQhGIcBHDoPWCIR0HrIKxJwnCKBCCxRCAnCKBIJYdAd73+hiARygM/f6GABCBs4CLaKBCAhFbNThm+7Sve47m8LZgg/DbPlZmymlwNvWeeYPFOO4GO45sV1Bvlccj0mkweNZt+mG3Xan3G43B75Hnu6ec5OfDsf0el0erWaN+6qyyr4xd8i4AU5scgDNN2UdSGKsCCNQcp5hR2I7VTRqNUvbeVlAKVBa/dJOvC2s2WyOxdfcKCrWRL57rIGOdrXvpne3lKlBGqU/ng1+LrKF3iQUBzYZgcLnlHmCinvcLXy95kMfsmrRIoUalZnqd4kkblNLa1D10AzOmlzFXENRwJpO12AqWz8KEkLny5eVoK5A3xZWdr6rLhaNNxZ6jFrXB7tlLHLmxExwWT9sbWqYlw9Sw3RuqiCyoOQvn6yGBO1p8XjhtZ5LXalZ8rkuukCViYUd8RwiDhfxBLmZIs9T7MAfDF5okmc7OfhCaFNJnfZ0o/ii2pbTRQAdY5iMaGpt0mQrkmplNBRo/cm54TNPiR08b3Y7YW12B0kehoJa1MFR/Mb9THKez6NstOssjkSVGaencp3ZVAiEri+suUwlMcBD3KY4D2k8n0T032U+8J0uN2nyE6TyB9P9nyNCEQCFLjIzoZGQ9YEcOg9YRWCBFAnWhCQUUQhBAhiEVjlDxe/0ggQ6Az9/oYIhFZwEKJCEggqNY3Goz9pcNWKVd05FDvIeYN/6ynmpx2A+LTRgbOFWzeZXQ+Ux6yqR1v8AFN3L9D9OsWW7C/EZ2MtNj7fu6pu1tQDZ7LrxsZi0xFSid2oLZ6/lPQy3wXaJFIFwFGoFs/X3mFJo7e9UemVXVUuBYW9ekwPafHCzKLXbXLPPh0AnU9q18VU3KA7txfXcUAmxJkbtjhRSekmp3CzMdWZmIJ/0jKXaeG7KrMWvzOGCTj/X/TPiEIghCdk8izjAw34ghmDhvxBIxoHqXZz8ITQjwzPdm/whNJbuzM+zqQVxRn3R2qnd4S/wjN8Fg3KJgTTBItmZKdLI/SZZSuR1McduOh/H6RmixtrH8cuUYpDKWw/EyZ73joc84V4IEMCMV8izotp0gT5YixAIssM5wEcOg9YEcPhHrCKxBFiCLIAIQhBEIQiMdoeL3+hgiFQ8Xv8AQwRCKwook3Zmx8RiD9xRdx/MBZB1c2Ue82Gyfs1c2OKqhAf/AG6I339XbIHoGiucY9jwwzn0jD4eizsFUXJ/dzyE3tCkAAuoAA62ymi2p2XpJQX+Foqr0r3CC71VIzux7zsLAi5PEDWUFAzm6vK5tKuDu/4/TLFFu7bOfBK2TC46S12d2bwrDeeipbmR9OUaprfSXezshM8WbZD1DBJTFqahVHBRYTC/aLSPxKT2O7ZlvwBBBA62J9jynoTNlKfaOH+J93u7/wATIJa+8eAlmLL45qVGfUYPPicLo8oEKenbY+zJCoOGqblUKLpUu1KowAuQ3iS5vz6CYTauwMThvx6LKo/OLPT/AO9bgdDnO1DLGXR5XNpcmPtfsrDAw34ghmDg/wAQR2VQPUuzX4QmkK5CZvs81qQl5jKh+FddZkl2dfFwkWFNKSkaXkjHkfCbpM1salUZ7toOcvtpfhMPKZUqZ027iO4muttc47h8NdbyGmDW12MusMBui0dSrorlFSfJDbDkQN2WhkPEax1KymeNLlDMWdadGKz5VEKDFEtMoscbwj1jcNj3R6yAOEUQRFBhFDEW8CesfZv2TRaKYuugatUs9JXF1op+VgNN5vFfgLWsbxZSUUNjxPJKkZ7s12AxFYCpWPwKRGW+t6zgjUJlujzY38jN1sX7PMFSszK1Z+dchkU+SABSOt5rKYBHnx8o5hVsWXyvKJZJM6ENPCPsM4eiADYWAyAAsB0jFUfWWNBO6ZErJKy8TdyBldj9gUapLWKVDmWTRjzZdD1yPnLZVunQxVXLzEDin2FSa6M7g+zVRGNqiMp5hkP6yYmxK40Cf95H/wCZbo5BsZNpMTK/DEs80ilp7EqnxOij/LvVCffdt85PwezadI3W7PpvtYt0Fsh6SXVqWyGp+UE8uXzMaMIoV5JMANqfO0iUm75B0OUk2+7vzJPzkXELZgedvnHEKTa/ZXCVrl6IVifHR+6a/M7uR9QZmtpfZi9Ng+Fq74GtKtZH/wClx3SeoXrPSK1O7L52jpG8x4AakanyEeOSS9yiemxz7Rh9jYBwvwnUo/FWFiP6jzmkGyGCWBvLWtQU2uM10tqI+mkLnYYYVExVSu9KpuydjmY0Wa/CU/amvu4kZxa20C2HIHKCug7uzm26LgX4za7Org0wfKeTthWDXIOs9L2HWBpr0EfJFJcFWCc5Se4tTUEjVDnFxL2UmZHF9o2UkBCbeUSKtl2V1GzV3E6Y1e0NQi+4fadLdjMvlieCiFeBFlhQwoR0HrBvFOg9ZAHAwgYEUGEWi27M7N/icXRoHw1H79v5FBd/9KmfQlLLQZaboyFuQnjn2RUA20Cf+HQqMOpamn0Zp7NSEz5XzRv0sahY8q6MM/1HEdZIojvA+l+atp7EW9oFFbaeo5x1hoRw+YuLjroZUaQaH5xyjVRc49T/ABG/zL8wYF5CA4ZdRzF4oFv1hoM7wgshBjEJ8pLpmyA8TGq692G3gXpIQFdSeURzkYKtlCfSEg5u90Dykd6e8g5i49pKInU01HrAQZoZ2PJfn+xHEy+ef1P6ekFWCrc+f1yiUlvmchwHEyEHAL/vT/eOU9COU5flEDZ+RkIebfaClqwMrdlbTATcbU/1mt7U7CfEVAUIAHOVH9ymVS5fw55CNvVUL43douHpKUvYSfsoqpAuB6w12SQlr6CeeYus4qN3jcEjWLCLl7lmbKsauj1fEuu7mRKf+HT+UZzAnG1Dq7e8v+y+Nd2+GxvyJjyxtKzPj1EZy20aD4CchOj/APBPOlVmnafL06DFE3HICvCvAi3kBQU6CDFEgKN/9jv+Lrc/ga8vvaf79J7FQqX115854/8AY5/iMR/8K/8A2CeupYi41Go/WZ8n5HQ0/wCCLCmnqPLUR2oDbrx5/wC8i0MdTAt8RC38odSw9LyWjEnPSVl1Fdha33iHg2/8z/tH3FmIkSpRNMi/BmseBDMWH1t6SbXzs3MQkFSOqIzTMkJIQSuvdMbqHuCPV/DGKn4YkIMgx5JGQ5yRThISEjgEBBOq1LCKQiVGuwGu77XPP0+sdBAzJuemXoJBwtQv3h+YkjpoPkBLGigHm3Pl0hIOAE65Dlx9f6RnHKSh3TZsrE6DMR/e5RjH0S1J1BszKwBGoJBAI6QE6MltrtHUwrhXVWvxUyDU7eKylTTI3hbWVQ2RUqkk1C7Di0i4vszVHeJFlzylixIolqZL2Nt/ewFCfhta2swdarvMzcyTNKcLUWlY6ATL8YcUasGpmpVQoMtNg4ncrK3I59JViPYdrGWvlUZYcSTPUxtij/OPedPGMVi232sTa86V+n+zQ9fH4POYsSdLbMwoMKBCOg9ZLILOggxxUY6A+0gD0D7Gj/6mvz+CMuP4i/1HvNzj9vqboq3DC29vgHPlkZ41sE4ijiKdWhvK6sMwQLj8ym+ViLjObirtFalbvUCzudRSDluN75/sTJqZbXwdXQRUo8rotgHHeVwd4+FlzPVh/SXGD2nWpkd7dXLjvU/UHT5SlpU1IBVGAGtgwA6iXFEsFulnH8pOZ6H9D7zFbR0XTXJo8VtVGonf7rDMWuQSOXIdecd2dihUpG2qH5TLo6kgrvLn4DdbHlY6Sx2ZWFHEIDcJiL02B0V7XT3zHtNEMt8MzZMNK0aCk0lIZXO+6SDwklavdB5y8zEqt4TItRvugY/UfuSBUq/cetoCC4YamO0WuQOcjLikRbuwHUgSNgds0N4k1BfgACcvQfu8jaQUm+i/Lyu2ziQtJj5fTOCmPQi+8Ol7H2mX7T7eTNA4yBFrjMmS0SmaXAABVC+HdAA8rZSaMUi+J1X/AJnCn5mebY3b9SogCOVp2AAQ7pYAWuxGZvy0+siYSqAZnnqEnSRphpm1bZ61RxdI+Goh6Op/WPsJ59hcxLPD42pSzQ5cUPgby8uo+ekkc99oktNXTKDaNWtQ+KU3bLUdVH5ms5A+km4dK74cvVaxK33QNJFxyU/4lqoJIq2rKjG4Tf8AEOVw4cekcr7TO4RfhN6hxaOPLM9zUi+x9hTN9LZzz/EqA53TcTS4/al6TA8phcHibs1zxhUWLLJF8IshJOCw2+27e1+MgCsOcp8VtF/j7qNYCRJvoVzjDmRr/wC7Sf8AEEWZv+2HGV50mzJ8h82n/wBTDJs+ofy26mPpsluLAfOW38CR4XI8j3hF3ao4Kw8jumSybSBT2MOLH0kqnsunyv1MfXEgeNWXqLj3Ek0qqt4WB9ZLDtQxTwSDRR7SSlIfsR5RHFSCxlFHYNRvC/G4HUggScFNrqxVh+YaiRVTlwkkNmZh1a6kdXQS4cSZgcbXRs911/y/duPc2Py0l7hNpUqi2NQJVXie6QfNTw8vaZkZydgsIL3mRTZvcUXuFxat4yARy8JI4jyju0sWjoVDWvmCBdlYZqw8wQD6SKir5RWpA8Iyk0JSZaV9uh0RzlUZRvpY91hk3pcXHkRFq9oF3QADlzylS2Hhrgby31Evgp9PD5J1XtMxXdVfXWQX2hWYboyGuklUtnASQuHUdYHkmwrHjXsUVXCO5uxLHzzjuFpFWA5mW1TylNtTbdHD2v3qh8KLmx/oPM5StxHT+DSNg+DEWPtMV2qwNLdYELvcwBvH21jWI7S4itlvCmn8qZserH9LRmlnnqfcmCUl7Dxg+2VeyUq/DCbjDcuq3BUEXyOfC30l7gMG97n/AGkjDLLnCUotWM3RIwNKwkysuUkYWiLRvHndF+WftnLlGkUuds8+2jtZfiWBvuqFv0JY/wCpmjQx18r6zO7OwdV2uVNxxMsK+za11IBsDc9J2E0lR5mUZTblRZYvaA3D0mTOKlruFhu3zGsra+DtxEZNFU4S7R2DxTXNyYdKqC1+MiYfJiOftC3SDp7RlRVK6JbVhedI3xfKdHKf5FuEhinHQkIUxMR3aGgkbqYBG1UX5jIyYqCObogsNFX/AGcR4KjDyPeHzhAV14K48u6ZZDyEMCSybCrXaAH4iMnVbj3Em0aqv3lII0uOY/YkgrzgGiFzAAzztlf92lOdboGnStxyf2OUlMs8OhtI2Eqg5S2pUbcZz6Oo2Fh6ZvYyWFjdFI89W3WOkIw1Ek0zI1MkyQqxkKw3fKNucrsbAZknIAeZkbaW06dEd43Y6IPEf6DzmP2ntKpXPfNk4U18Pr/MesjdESsn7c7Rs16eF041iLj/AKAdepy6zNU8JmWYku2ZdiSx9TJYq2ytC+KJU7ZfGkdRoyZQQg6xlKwkulXEFBsn4VfOW+HNtDKOnihJlDFZR0VtGpwVa1hxh7TFxY8RIGxqmefpJu0KmcujyiiXDK+lhkH5R7QMVTXcNhwkj4oEYr4kWMuRnZlKuyhTZmUG7m+cpNr4JgpIUnoJusTXWVlbEiXRm0ZcmKLVGMwewHqIGzXytHv7uVB+aac4wCIMYDLPJMo9PioyT7JqgzprrrynSeVi+mxlJDEUrFCc4hooIRd2cIV5A0Koh7sAGFaAguURluCOcXdhBYAp10Q8KSG3W1+s1VKgVp75NltxlLRw6s6AjVlF9CLkcZskw4yW1wvPOZ/ByblqU49cmYq7SsfFlHMPiwxymlobKoOxLUaZPnTU/pIlfBqtQhVAHAKAAOgEng+yeo+gcLTdlLKpKjU6D3klMOzDMkA/y6j3llsgXRl/ekOnSsbGWRxpFUssmZvEdjla5So2+c/vO9c+Z1kTE9jKiAlWDdMvlNuq2MlVFuthxhcIv2FWSS9zyqtsKqACUNjobZGRm2S4/IfSew08OLAWyER8IpHhHtF8MSxaiR42cGw1UjqLRxaBHCey4fBoosFEM4WnxRD1RT+kXwxG9S/g8Z+CeRjiU3AuFa3Q2nsaUEHhRR0UD6SJt3/DVfJb+xBk8MSepfwYXs/tC7br5Ec5Y43Fhmy0Hz85Whv/ADHAYYwoWeXcOF41UaOqs51Fo5UV1YXkCvRMuno34Rs4SOpUVyjZnWwjGSMPs8y8XCR9KPlC5irCisXB5TpcCnOibizaj//Z",
        "phone": "71342769",
        "address": "Hostital del sur",
        "location": "https://www.google.com/maps/place/Cream+office/@-17.4542131,-66.1535126,17z/data=!3m1!4b1!4m6!3m5!1s0x93e373db1fa15d9f:0xf33b6ce4805eaba3!8m2!3d-17.4542182!4d-66.1509377!16s%2Fg%2F11qqf23q60?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
        "state": "active",
        "email": "abner@gmail.com",
        "registerId": "",
        "registerDate": "2024-10-02T23:07:05-04:00",
        "approvalId": "",
        "approvalDate": "",
        "user": true,
        "level": "700",
        "userName": "hola",
        "password": "abner",
        
      "spiritual": {
        "christian": true,
        "churchName": "Alto Pagador",
        "department": "Cochabamba",
        "province": "Cercado",
        "locality": "Cercado",
        "placeAccept": "Campamento",
        "namePlaceAccept": "Los molinos",
        "dateAccept": "2000-01-01T04:00:00.000Z",
        "timeAccept": "2024-05-31T15:15:00.000Z",
        "baptized": true,
        "nameBaptizedChurch": "Alto Pagador",
        "denominationBaptizedChurch": "UCE",
        "palceBaptized": "Rio tamborada",
        "dateBaptized": "2010-01-02T04:00:00.000Z",
        "becameMemberFor": "Bautizo",
        "becameMembreDate": "2010-05-31T04:00:00.000Z",
        "libroN": "",
        "folioN": "",
        "membershipRegistrationDate": "",
        "membershipRegistrationTime": "",
        "baptizedCertificatePhoto": ""
      },
      "legal": {
        "legalInformation": true,
        "oficialiaN": "12345",
        "libroN": "5",
        "partidaN": "9",
        "folioN": "1",
        "oficialiaDepartamento": "Cochabamba",
        "oficialiaProvincia": "Cercado",
        "oficialiaDate": "2024-05-31T04:00:00.000Z",
        "departamentoNacimiento": "Cochabamba",
        "provinciaNacimiento": "Cercado",
        "localidadNacimiento": "Cercado",
        "nacionalidadNacimiento": "Boliviana",
        "fechaNacimiento": "1981-11-20T04:00:00.000Z",
        "horaNacimiento": "2024-10-02T04:59:00.000Z",
        "nombresPadre": "Victor",
        "apellidosPadre": "Mamani",
        "nombresMadre": "Rosalia",
        "apellidosMadre": "Loka",
        "localidadEmicion": "cercado",
        "fechaEmicion": "2024-10-02T04:00:00.000Z",
        "certificatePhoto": ""
      }
    }
  ]
  return data;
};

module.exports = {
  getRootData
};