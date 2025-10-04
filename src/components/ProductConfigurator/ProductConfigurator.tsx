'use client'

import { useState } from 'react'

interface ProductConfiguratorProps {
  dictionary: {
    productConfigurator: {
      title: string
      subtitle: string
      productType: {
        label: string
        jersey: string
        shorts: string
        socks: string
        tracksuit: string
        jacket: string
      }
      color: {
        label: string
        primary: string
        secondary: string
      }
      personalization: {
        label: string
        playerName: string
        playerNumber: string
        addLogo: string
        position: {
          label: string
          chest: string
          sleeve: string
          back: string
        }
      }
      quantity: {
        label: string
        sizes: string
        xs: string
        s: string
        m: string
        l: string
        xl: string
        xxl: string
      }
      preview: {
        front: string
        back: string
        rotate: string
      }
      actions: {
        reset: string
        getQuote: string
        addToInquiry: string
        contactMessage: string
      }
    }
  }
  sportName?: string
}

type ProductType = 'jersey' | 'shorts' | 'socks' | 'tracksuit' | 'jacket'
type LogoPosition = 'chest' | 'sleeve' | 'back'
type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export default function ProductConfigurator({ dictionary, sportName }: ProductConfiguratorProps) {
  const [productType, setProductType] = useState<ProductType>('jersey')
  const [primaryColor, setPrimaryColor] = useState('#10b981')
  const [secondaryColor, setSecondaryColor] = useState('#ffffff')
  const [playerName, setPlayerName] = useState('')
  const [playerNumber, setPlayerNumber] = useState('')
  const [hasLogo, setHasLogo] = useState(false)
  const [logoPosition, setLogoPosition] = useState<LogoPosition>('chest')
  const [showBack, setShowBack] = useState(false)
  const [quantities, setQuantities] = useState<Record<Size, number>>({
    xs: 0,
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
    xxl: 0
  })

  const totalQuantity = Object.values(quantities).reduce((sum, qty) => sum + qty, 0)

  const handleReset = () => {
    setProductType('jersey')
    setPrimaryColor('#10b981')
    setSecondaryColor('#ffffff')
    setPlayerName('')
    setPlayerNumber('')
    setHasLogo(false)
    setLogoPosition('chest')
    setShowBack(false)
    setQuantities({
      xs: 0,
      s: 0,
      m: 0,
      l: 0,
      xl: 0,
      xxl: 0
    })
  }

  const handleQuantityChange = (size: Size, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [size]: Math.max(0, value)
    }))
  }

  return (
    <div className="bg-semantic-background-secondary rounded-lg p-6 md:p-8">
      <h2 className="text-display-lg font-display font-bold mb-2">
        {dictionary.productConfigurator.title}
      </h2>
      <p className="text-body-lg text-semantic-text-secondary mb-8">
        {dictionary.productConfigurator.subtitle}
      </p>
<div className="grid lg:grid-cols-2 gap-8">
<div className="space-y-6">
<div>
            <label className="text-body-sm font-semibold block mb-3">
              {dictionary.productConfigurator.productType.label}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {(['jersey', 'shorts', 'socks', 'tracksuit', 'jacket'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setProductType(type)}
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                    productType === type
                      ? 'border-semantic-brand-default bg-semantic-brand-light text-semantic-brand-default'
                      : 'border-semantic-border hover:border-semantic-brand-default'
                  }`}
                >
                  {dictionary.productConfigurator.productType[type]}
                </button>
              ))}
            </div>
          </div>
<div>
            <label className="text-body-sm font-semibold block mb-3">
              {dictionary.productConfigurator.color.label}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-body-xs text-semantic-text-secondary block mb-2">
                  {dictionary.productConfigurator.color.primary}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-16 h-10 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="input-field flex-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-body-xs text-semantic-text-secondary block mb-2">
                  {dictionary.productConfigurator.color.secondary}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-16 h-10 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="input-field flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
<div>
            <label className="text-body-sm font-semibold block mb-3">
              {dictionary.productConfigurator.personalization.label}
            </label>
            <div className="space-y-3">
              <input
                type="text"
                placeholder={dictionary.productConfigurator.personalization.playerName}
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="input-field w-full"
              />
              <input
                type="text"
                placeholder={dictionary.productConfigurator.personalization.playerNumber}
                value={playerNumber}
                onChange={(e) => setPlayerNumber(e.target.value)}
                className="input-field w-full"
              />
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasLogo}
                  onChange={(e) => setHasLogo(e.target.checked)}
                  className="w-5 h-5 rounded text-semantic-brand-default"
                />
                <span className="text-body-sm">
                  {dictionary.productConfigurator.personalization.addLogo}
                </span>
              </label>
              {hasLogo && (
                <div className="ml-7 flex gap-2">
                  {(['chest', 'sleeve', 'back'] as const).map((position) => (
                    <button
                      key={position}
                      onClick={() => setLogoPosition(position)}
                      className={`px-3 py-1 rounded text-body-xs ${
                        logoPosition === position
                          ? 'bg-semantic-brand-default text-semantic-on-brand'
                          : 'bg-semantic-background-primary'
                      }`}
                    >
                      {dictionary.productConfigurator.personalization.position[position]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
<div>
            <label className="text-body-sm font-semibold block mb-3">
              {dictionary.productConfigurator.quantity.label}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['xs', 's', 'm', 'l', 'xl', 'xxl'] as const).map((size) => (
                <div key={size} className="text-center">
                  <label className="text-body-xs text-semantic-text-secondary block mb-1">
                    {dictionary.productConfigurator.quantity[size]}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={quantities[size]}
                    onChange={(e) => handleQuantityChange(size, parseInt(e.target.value) || 0)}
                    className="input-field w-full text-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
<div className="lg:sticky lg:top-24">
          <div className="bg-semantic-background-primary rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-display-xs font-semibold">Preview</h3>
              <button
                onClick={() => setShowBack(!showBack)}
                className="text-body-sm text-semantic-brand-default hover:text-semantic-brand-hover"
              >
                {dictionary.productConfigurator.preview.rotate} →
              </button>
            </div>
<div className="aspect-square bg-semantic-background-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
              <div
                className="w-48 h-56 rounded-lg shadow-lg flex flex-col items-center justify-center"
                style={{ backgroundColor: primaryColor }}
              >
                
                {hasLogo && (
                  <div
                    className={`absolute ${
                      logoPosition === 'chest' ? 'top-16' : 
                      logoPosition === 'sleeve' ? 'top-8 left-8' : 
                      'bottom-16'
                    }`}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">LOGO</span>
                    </div>
                  </div>
                )}

                
                {playerNumber && (
                  <div className={`text-white font-bold ${showBack ? 'text-6xl' : 'text-4xl'}`}>
                    {playerNumber}
                  </div>
                )}

                
                {playerName && showBack && (
                  <div className="text-white font-semibold text-lg mt-2">
                    {playerName.toUpperCase()}
                  </div>
                )}

                
                <div
                  className="absolute bottom-0 left-0 right-0 h-8"
                  style={{ backgroundColor: secondaryColor }}
                />
              </div>
            </div>
<div className="text-center mt-4">
              <p className="text-body-sm text-semantic-text-secondary">
                {showBack ? dictionary.productConfigurator.preview.back : dictionary.productConfigurator.preview.front}
              </p>
            </div>
          </div>
<div className="mt-6 space-y-3">
            <button
              onClick={handleReset}
              className="button-secondary w-full"
            >
              {dictionary.productConfigurator.actions.reset}
            </button>
            <button
              disabled={totalQuantity === 0}
              className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {dictionary.productConfigurator.actions.getQuote} ({totalQuantity} stk)
            </button>
            <p className="text-body-xs text-semantic-text-secondary text-center">
              {dictionary.productConfigurator.actions.contactMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}