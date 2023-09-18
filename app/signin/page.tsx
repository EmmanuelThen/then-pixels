'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import ForgotPassword from '../signin/components/ForgotPassword'
import GoogleButton from './components/GoogleButton'
import DiscordButton from './components/DiscordButton'
import TwitterButton from './components/TwitterButton'
import ForgotPasswordModal from './components/ForgotPasswordModal'
import ConfirmationButton from '@/components/ConfirmationButton'
import DialogButton from '@/components/DialogButton'
import ShinyText from '@/components/ShinyText'
import LoadingState from '@/components/LoadingState'
import LoaderRing from '@/components/LoaderRing'
import OAuthButton from './components/OAuthButton'


export default function Login() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [view, setView] = useState('sign-in');
  const [notRegisteredMessageDisplay, setNotRegisteredMessageDisplay] = useState('hidden');
  const [orderId, setOrderId] = useState('');
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    setView('check-email')
  }

  // Come back to fix up sign in logic
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      await supabase.auth.signInWithPassword({
        email,
        password,
      });

      const { data, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email);

      if (!user) {
        setNotRegisteredMessageDisplay('');
        setTimeout(() => {
          setNotRegisteredMessageDisplay('hidden');
        }, 3000)
        console.log('User is not registered');

      } else if (user.id) {
        // await supabase.auth.signInWithPassword({
        //   email,
        //   password,
        // });
        setLoading(false);
        router.push('/dashboard');
        router.refresh();
      }
    } catch (error) {
      console.error('Error message:', error)
    }
  }

  // const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
  //   setLoading(true);
  //   e.preventDefault();

  //   try {
  //     const { data, error: userError } = await supabase
  //       .from('users')
  //       .select('*')
  //       .eq('email', email);

  //     if (userError) {
  //       console.error("User fetch error:", userError.message);
  //       return;
  //     }

  //     if (!data || data.length === 0) {
  //       setNotRegisteredMessageDisplay('');
  //       setTimeout(() => {
  //         setNotRegisteredMessageDisplay('hidden');
  //       }, 3000);
  //       console.log('User is not registered');
  //     } else {
  //       await supabase.auth.signInWithPassword({
  //         email,
  //         password,
  //       });
  //       setLoading(false);
  //       router.push('/dashboard');
  //       router.refresh();
  //     }
  //   } catch (error) {
  //     console.error('Error message:', error);
  //   }
  // }

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/account/update-password`,
    })

  }

  const handleGoogleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
    router.push('/dashboard');
    router.refresh();
  }

  const handleDiscordSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signInWithOAuth({
      provider: 'discord'
    });
    router.push('/dashboard');
    router.refresh();
  }

  const handleTwitterSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signInWithOAuth({
      provider: 'twitter'
    });
    router.push('/dashboard');
    router.refresh();
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="flex-1 flex flex-col w-full px-8 max-w-lg justify-center gap-2">
        {view === 'check-email' ? (
          <p className="text-center text-foreground">
            Check <span className="font-bold">{email}</span> to continue signing
            up
          </p>
        ) : (
          <div className='flex flex-col items-center justify-center mb-6'>
            <div className='mb-5'>
              <ShinyText
                text={view === 'sign-in' ? 'Sign in' : view === 'sign-up' ? 'Create account' : ''}
              />
            </div>
            <form
              className="p-10 md:px-20 py-12 rounded  shadow-blackA9 shadow-[0px_4px_7px] flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
              onSubmit={view === 'sign-in' ? handleSignIn : handleSignUp}
            >
              <label className="text-md font-medium text-blue9" htmlFor="email">
                Email
              </label>
              <input
                className="transition duration-150 ease-in-out bg-slate4 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9  mb-6"
                type='email'
                id='email'
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="you@example.com"
                pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
                required
              />
              <label className="text-md font-medium text-blue9" htmlFor="password">
                Password
              </label>
              {view === 'sign-up' ?
                (
                  <>
                    <input
                      className="transition duration-150 ease-in-out bg-slate4 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9  "
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,}$/'
                      required
                      placeholder="••••••••"
                    />
                    <div id='password-requirements' className='leading-snug text-[8px] md:text-[10px] text-blue9/60 ml-2 mb-6'>
                      <p>At least 8 characters</p>
                      <p>Mix of letters and numbers</p>
                      <p>At least 1 special character</p>
                      <p>At least 1 lowercase letter and 1 uppercase letter</p>
                    </div>
                    <label className="text-md text-blue9 font-medium" htmlFor="password">
                      Re-enter Password
                    </label>
                    <input
                      className="transition duration-150 ease-in-out bg-slate4 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9  mb-6"
                      type="password"
                      name="password"
                      onChange={(e) => setReEnterPassword(e.target.value)}
                      value={reEnterPassword}
                      pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,}$/'
                      required
                      placeholder="••••••••"
                    />
                    <label className="text-md text-blue9 font-medium" htmlFor="order-id">
                      ORDER-ID
                    </label>
                    <input
                      className="transition duration-150 ease-in-out bg-slate4 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9  mb-6"
                      type="text"
                      name="order-id"
                      onChange={(e) => setOrderId(e.target.value)}
                      value={orderId}
                      pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,}$/'
                      required
                      placeholder="TPX-123456789"
                    />
                  </>
                ) :
                (
                  <input
                    className="transition duration-150 ease-in-out bg-slate4 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 mb-6"
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="••••••••"
                    required
                  />
                )}
              {view === 'sign-in' && (
                <>
                  <button
                    className={!email || !password ?
                      'bg-slate9 text-white rounded px-4 py-2 cursor-not-allowed' :
                      "bg-blue9 transition duration-150 ease-in-out hover:opacity-80 rounded px-4 py-2 text-white hover:cursor-pointer"}
                    disabled={!email || !password}
                  >
                    {loading ? 'Sign In' : <LoaderRing />}
                  </button>
                  <div id='signup-terms' className=' flex justify-center mb-6'>
                    <div className='text-[10px] text-center '>
                      <div>
                        <DialogButton
                          buttonText='Forgot password?'
                          dialogTitle=''
                          dialogDesc=''
                          content={<ForgotPasswordModal
                            modalContentDisplay=''
                            confirmationDisplay='' />}
                          saveButton=''
                          buttonDisplay='hidden'
                          myOwnButtonDisplay='hidden'
                          myOwnButton={<ConfirmationButton
                            buttonText='Continue'
                            toastTitle='Email sent to:'
                            toastContent='session.user.email' />} onClickfunction={undefined} disabled={undefined} saveButtonColor={undefined} saveButtonType={undefined} />
                      </div>
                    </div>
                  </div>
                  <p className={`${notRegisteredMessageDisplay} scale-in-center flex justify-center text-red9`}>
                    User is not registered
                  </p>
                  <p className="text-sm text-center">
                    Don't have an account?
                    <button
                      className="ml-1 text-blue9 transition duration-150 ease-in-out hover:opacity-80"
                      onClick={() => setView('sign-up')}
                    >
                      Sign up now
                    </button>
                  </p>
                  <div className='flex justify-center w-full mt-10'>
                    <div className='flex items-center justify-center gap-8 w-full'>
                      <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                      <span className='text-xs text-slate8'>Or</span>
                      <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                    </div>
                  </div>
                  <div className='flex justify-evenly' id='providers-buttons'>
                    <div>
                      <OAuthButton
                        svg={
                          <svg height="20px" width="20px" viewBox="0 0 48 48" preserveAspectRatio="xMinYMin meet" focusable="false" aria-hidden="true">
                            <title>
                              Google Logo
                            </title>
                            <clipPath id="g">
                              <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                            </clipPath>
                            <g className="colors" clipPath="url(#g)">
                              <path fill="#FBBC05" d="M0 37V11l17 13z">
                              </path>
                              <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z">
                              </path>
                              <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z">
                              </path>
                              <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z">
                              </path>
                            </g>
                          </svg>
                        }

                      />
                    </div>
                    <div>
                      <OAuthButton
                        svg={
                          <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" id="twitter">
                            <g clip-path="url(#clip0_84_15697)">
                              <rect width="512" height="512" fill="#000" rx="60">
                              </rect>
                              <path fill="#fff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z">
                              </path>
                            </g>
                            <defs>
                              <clipPath id="clip0_84_15697">
                                <rect width="512" height="512" fill="#fff">
                                </rect>
                              </clipPath>
                            </defs>
                          </svg>
                        }

                      />
                    </div>
                    <div>
                      <OAuthButton
                        svg={
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5865f2" className="bi bi-discord" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                          </svg>
                        }

                      />
                    </div>
                  </div>
                </>
              )}
              {view === 'sign-up' && (
                <>
                  <button
                    className={`${password === reEnterPassword ? 'mb-6' : ''} 
                    ${!email || !password || !reEnterPassword || (password !== reEnterPassword) ?
                        'bg-slate9 text-white rounded px-4 py-2 cursor-not-allowed' :
                        'bg-blue9 hover:opacity-80 rounded px-4 py-2 text-white hover:cursor-pointer transition duration-150 ease-in-out'}`
                    }
                    disabled={!email || !password || !reEnterPassword || (password !== reEnterPassword)}
                  >
                    {loading ? 'Sign Up' : <LoaderRing />}
                  </button>
                  <div>
                    {password === reEnterPassword ? (
                      ''
                    ) : (
                      <div className='flex justify-center mb-6'>
                        <span className='scale-in-center text-red9'>
                          Passwords dont match
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-center">
                    Already have an account?
                    <button
                      className="ml-1 text-blue9 transition duration-150 ease-in-out hover:opacity-80"
                      onClick={() => setView('sign-in')}
                    >
                      Sign in now
                    </button>
                  </p>
                </>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
