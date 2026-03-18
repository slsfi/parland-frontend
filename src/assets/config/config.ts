type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://granska-parland.sls.fi",
    projectNameDB: "parland",
    projectId: 1,
    backendBaseURL: "https://granska-parland-api.sls.fi/digitaledition",
    alternateFacsimileBaseURL: "",
    i18n: {
      languages: [
        { code: "sv", label: "Svenska", region: "FI" }
      ],
      defaultLanguage: "sv",
      multilingualCollectionTableOfContents: false,
      multilingualReadingTextLanguages: [],
      multilingualNamedEntityData: false
    },
    enableRouterLoadingBar: true,
    auth: {
      enabled: false,
      backendAuthBaseURL: "https://api.sls.fi/"
    },
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "Svartvitt foto av en ung man i tweed-kostym som sitter utomhus och ler mot kameran. Han har kort, bakåtkammat hår och bär slips. Bakgrunden visar otydligt några byggnader.",
          URL: "assets/images/home-page/slsa945_3_HP_Kaunas_1929_Sonder.jpg"
        }
      }
    },
    prebuild: {
      sitemap: false,
      staticCollectionMenus: false,
      featureBasedRoutes: false
    },
    ssr: {
      trustProxyHops: 2,
      collectionSideMenu: false
    }
  },
  articles: [
    {
      id: "04-01",
      language: "sv",
      routeName: "om-henry-parland",
      title: "Om Henry Parland",
      coverURL: "",
      enableTOC: true,
      downloadOptions: []
    }
  ],
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: true,
    enableMathJax: false,
    firstTextItem: {},
    frontMatterPages: {
      cover: true,
      title: true,
      foreword: true,
      introduction: true
    },
    frontMatterPageDisabled: {
      cover: [],
      title: [],
      foreword: [],
      introduction: []
    },
    highlightSearchMatches: true,
    inlineIllustrations: [2, 3],
    mediaCollectionMappings: {},
    order: [
      [1, 2, 3, 4, 5]
    ]
  },
  ebooks: [],
  page: {
    about: {
      initialPageNode: "01"
    },
    article: {
      showTextDownloadButton: false,
      showURNButton: false
    },
    elasticSearch: {
      enableFilters: true,
      enableSortOptions: false,
      filterGroupsOpenByDefault: ["Type", "Collection"],
      hitsPerPage: 15,
      indices: ["parland"],
      openReadingTextWithComments: false,
      textHighlightFragmentSize: 150,
      textHighlightType: "fvh",
      textTitleHighlightType: "fvh",
      typeFilterGroupOptions: ["est", "com", "ms", "inl", "tit", "fore"],
      fixedFilters: [
        {
          terms: {
            deleted: ["0"]
          }
        },
        {
          terms: {
            published: ["1", "2"]
          }
        }
      ],
      additionalSourceFields: [],
      aggregations: {
        Type: {
          terms: {
            field: "text_type",
            size: 40,
            order: {_key: "asc"}
          }
        },
        Collection: {
          terms: {
            field: "publication_data.collection_name.keyword",
            size: 40,
            order: {_key: "asc"}
          }
        }
      }
    },
    foreword: {
      showURNButton: false,
      showViewOptionsButton: true
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Svartvitt foto av en ung man i tweed-kostym som sitter utomhus och ler mot kameran. Han har kort, bakåtkammat hår och bär slips. Bakgrunden visar otydligt några byggnader."
        },
        intrinsicSize: {
          height: 756,
          width: 520
        },
        orientationPortrait: true,
        alternateSources: [],
        URL: "assets/images/home-page/slsa945_3_HP_Kaunas_1929_Sonder.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "10%"
        },
        siteTitleOnImageOnSmallScreens: false
      },
      showContentGrid: true,
      showFooter: true,
      showSearchbar: false
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      persons: {
        database: "elastic",
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      places: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      works: {
        publishedStatus: 2
      }
    },
    introduction: {
      hasSeparateTOC: true,
      showTextDownloadButton: false,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        personInfo: false,
        placeInfo: false,
        workInfo: false,
        paragraphNumbering: true,
        pageBreakEdition: false
      }
    },
    mediaCollection: {
      showURNButton: true
    },
    text: {
      defaultViews: ["readingtext"],
      defaultViewOptions: [],
      showTextDownloadButton: false,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        comments: true,
        personInfo: false,
        placeInfo: false,
        emendations: true,
        normalisations: true,
        workInfo: false,
        abbreviations: false,
        paragraphNumbering: true,
        pageBreakOriginal: true,
        pageBreakEdition: false
      },
      variantViewOptions: {
        showVariationTypeOption: false,
        defaultVariationType: "all"
      },
      viewTypes: {
        showAll: true,
        readingtext: true,
        comments: true,
        facsimiles: true,
        manuscripts: true,
        variants: false,
        illustrations: false,
        legend: true,
        metadata: false
      },
      viewTypeDisabledCollections: {
        readingtext: [],
        comments: [],
        facsimiles: [],
        manuscripts: [5],
        variants: [],
        illustrations: [],
        legend: [],
        metadata: []
      }
    },
    title: {
      loadContentFromMarkdown: false,
      showURNButton: true,
      showViewOptionsButton: true
    }
  },
  component: {
    collectionSideMenu: {
      sortableCollectionsAlphabetical: [],
      sortableCollectionsChronological: [],
      sortableCollectionsCategorical: [],
      categoricalSortingPrimaryKey: "",
      categoricalSortingSecondaryKey: ""
    },
    contentGrid: {
      includeArticles: false,
      includeEbooks: false,
      includeMediaCollection: false,
      mediaCollectionCoverURL: "",
      mediaCollectionCoverAltTexts: {
        sv: "Alt-text"
      },
      showTitles: true
    },
    facsimiles: {
      imageQuality: 4,
      showTitle: true
    },
    mainSideMenu: {
      items: {
        about: true,
        articles: true,
        ebooks: false,
        collections: true,
        mediaCollections: false,
        indexKeywords: false,
        indexPersons: false,
        indexPlaces: false,
        indexWorks: false,
        search: true,
        cookiePolicy: false,
        termsOfUse: false,
        privacyPolicy: false,
        accessibilityStatement: false,
      },
      defaultExpanded: true,
      ungroupArticles: true
    },
    manuscripts: {
      showTitle: true,
      showNormalizedToggle: true,
      showOpenLegendButton: true
    },
    topMenu: {
      showAboutButton: true,
      showContentButton: true,
      showElasticSearchButton: true,
      showLanguageButton: false
    },
    variants: {
      showOpenLegendButton: true
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      readingTextFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      commentsFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      manuscriptsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      }
    },
    fullscreenImageViewer: {
      imageQuality: 4
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    },
    namedEntity: {
      showAliasAndPrevLastName: false,
      showArticleData: false,
      showCityRegionCountry: false,
      showDescriptionLabel: false,
      showGalleryOccurrences: false,
      showMediaData: false,
      showOccupation: false,
      showOccurrences: true,
      showType: false,
      useSimpleWorkMetadata: false
    }
  }
}
