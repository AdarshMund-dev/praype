import { Button } from '@/components/ui/button'
import { AppleIcon, GitHubIcon, GoogleIcon } from '@/components/icons/BrandIcons'

export default function SocialAuthButtons({
  onContinue,
}: {
  onContinue?: () => void
}) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Button
        type="button"
        variant="outline"
        onClick={onContinue}
        className="rounded-full transition-transform hover:scale-105"
        aria-label="Continue with Google"
      >
        <GoogleIcon className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={onContinue}
        className="rounded-full transition-transform hover:scale-105"
        aria-label="Continue with GitHub"
      >
        <GitHubIcon className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={onContinue}
        className="rounded-full transition-transform hover:scale-105"
        aria-label="Continue with Apple"
      >
        <AppleIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
