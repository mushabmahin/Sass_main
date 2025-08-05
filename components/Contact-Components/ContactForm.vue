<template>
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
        <p class="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
            <div class="mt-2.5">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm/6 font-semibold text-gray-900">Company</label>
            <div class="mt-2.5">
              <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
            <div class="mt-2.5">
              <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
            <div class="mt-2.5">
              <div class="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select id="country" name="country" autocomplete="country" aria-label="Country" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option value="">Select</option>
                    <option value="US">United States (+1)</option>
                    <option value="CA">Canada (+1)</option>
                    <option value="GB">United Kingdom (+44)</option>
                    <option value="AU">Australia (+61)</option>
                    <option value="IN">India (+91)</option>
                    <option value="DE">Germany (+49)</option>
                    <option value="FR">France (+33)</option>
                    <option value="IT">Italy (+39)</option>
                    <option value="ES">Spain (+34)</option>
                    <option value="CN">China (+86)</option>
                    <option value="JP">Japan (+81)</option>
                    <option value="RU">Russia (+7)</option>
                    <option value="BR">Brazil (+55)</option>
                    <option value="ZA">South Africa (+27)</option>
                    <option value="MX">Mexico (+52)</option>
                    <option value="AR">Argentina (+54)</option>
                    <option value="NG">Nigeria (+234)</option>
                    <option value="EG">Egypt (+20)</option>
                    <option value="TR">Turkey (+90)</option>
                    <option value="KR">South Korea (+82)</option>
                    <option value="ID">Indonesia (+62)</option>
                    <option value="PK">Pakistan (+92)</option>
                    <option value="BD">Bangladesh (+880)</option>
                    <option value="SA">Saudi Arabia (+966)</option>
                    <option value="AE">United Arab Emirates (+971)</option>
                    <option value="SG">Singapore (+65)</option>
                    <option value="MY">Malaysia (+60)</option>
                    <option value="TH">Thailand (+66)</option>
                    <option value="VN">Vietnam (+84)</option>
                    <option value="PH">Philippines (+63)</option>
                    <option value="NZ">New Zealand (+64)</option>
                    <option value="KE">Kenya (+254)</option>
                    <option value="GH">Ghana (+233)</option>
                    <option value="UA">Ukraine (+380)</option>
                    <option value="PL">Poland (+48)</option>
                    <option value="SE">Sweden (+46)</option>
                    <option value="NO">Norway (+47)</option>
                    <option value="FI">Finland (+358)</option>
                    <option value="DK">Denmark (+45)</option>
                    <option value="CH">Switzerland (+41)</option>
                    <option value="BE">Belgium (+32)</option>
                    <option value="NL">Netherlands (+31)</option>
                    <option value="IE">Ireland (+353)</option>
                    <option value="IL">Israel (+972)</option>
                    <option value="IR">Iran (+98)</option>
                    <option value="IQ">Iraq (+964)</option>
                    <option value="AF">Afghanistan (+93)</option>
                    <option value="LK">Sri Lanka (+94)</option>
                    <option value="NP">Nepal (+977)</option>
                    <option value="MM">Myanmar (+95)</option>
                    <option value="KH">Cambodia (+855)</option>
                    <option value="TW">Taiwan (+886)</option>
                    <option value="HK">Hong Kong (+852)</option>
                    <option value="MO">Macau (+853)</option>
                    <option value="SA">Saudi Arabia (+966)</option>
                    <option value="QA">Qatar (+974)</option>
                    <option value="KW">Kuwait (+965)</option>
                    <option value="OM">Oman (+968)</option>
                    <option value="BH">Bahrain (+973)</option>
                    <option value="JO">Jordan (+962)</option>
                    <option value="LB">Lebanon (+961)</option>
                    <option value="SY">Syria (+963)</option>
                    <option value="YE">Yemen (+967)</option>
                    <option value="SD">Sudan (+249)</option>
                    <option value="DZ">Algeria (+213)</option>
                    <option value="MA">Morocco (+212)</option>
                    <option value="TN">Tunisia (+216)</option>
                    <option value="SN">Senegal (+221)</option>
                    <option value="CI">Ivory Coast (+225)</option>
                    <option value="CM">Cameroon (+237)</option>
                    <option value="UG">Uganda (+256)</option>
                    <option value="TZ">Tanzania (+255)</option>
                    <option value="ET">Ethiopia (+251)</option>
                    <option value="ZW">Zimbabwe (+263)</option>
                    <option value="ZM">Zambia (+260)</option>
                    <option value="MZ">Mozambique (+258)</option>
                    <option value="AO">Angola (+244)</option>
                    <option value="CD">Congo (DRC) (+243)</option>
                    <option value="CG">Congo (Republic) (+242)</option>
                    <option value="MG">Madagascar (+261)</option>
                    <option value="RE">Reunion (+262)</option>
                    <option value="MU">Mauritius (+230)</option>
                    <option value="SC">Seychelles (+248)</option>
                    <option value="BW">Botswana (+267)</option>
                    <option value="NA">Namibia (+264)</option>
                    <option value="LS">Lesotho (+266)</option>
                    <option value="SZ">Eswatini (+268)</option>
                    <option value="MW">Malawi (+265)</option>
                    <option value="GM">Gambia (+220)</option>
                    <option value="SL">Sierra Leone (+232)</option>
                    <option value="LR">Liberia (+231)</option>
                    <option value="BJ">Benin (+229)</option>
                    <option value="BF">Burkina Faso (+226)</option>
                    <option value="TG">Togo (+228)</option>
                    <option value="NE">Niger (+227)</option>
                    <option value="ML">Mali (+223)</option>
                    <option value="GN">Guinea (+224)</option>
                    <option value="GW">Guinea-Bissau (+245)</option>
                    <option value="GQ">Equatorial Guinea (+240)</option>
                    <option value="GA">Gabon (+241)</option>
                    <option value="CF">Central African Republic (+236)</option>
                    <option value="ST">Sao Tome and Principe (+239)</option>
                    <option value="KM">Comoros (+269)</option>
                    <option value="CV">Cape Verde (+238)</option>
                    <option value="DJ">Djibouti (+253)</option>
                    <option value="ER">Eritrea (+291)</option>
                    <option value="SO">Somalia (+252)</option>
                    <option value="SZ">Eswatini (+268)</option>
                    <option value="LS">Lesotho (+266)</option>
                    <option value="BW">Botswana (+267)</option>
                    <option value="NA">Namibia (+264)</option>
                    <option value="MW">Malawi (+265)</option>
                    <option value="MZ">Mozambique (+258)</option>
                    <option value="ZM">Zambia (+260)</option>
                    <option value="ZW">Zimbabwe (+263)</option>
                  </select>
                  <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
                </div>
                <input type="text" name="phone-number" id="phone-number" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 border border-gray-300 rounded-md placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none sm:text-sm/6" placeholder="123-456-7890" />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <div class="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                <span class="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input type="checkbox" class="absolute inset-0 appearance-none focus:outline-hidden" aria-label="Agree to policies" id="agree-to-policies" name="agree-to-policies" />
              </div>
            </div>
            <label class="text-sm/6 text-gray-600" for="agree-to-policies">
              By selecting this, you agree to our
              {{ ' ' }}
              <a href="#" class="font-semibold whitespace-nowrap text-indigo-600">privacy policy</a>.
            </label>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 hover:scale-105 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  </script>